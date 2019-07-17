import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductsState } from '../store/reducers';
import { getToppingsLoaded } from '../store/selectors';
import { catchError, exhaustMap, filter, take, tap } from 'rxjs/operators';
import { loadToppings } from '../store/actions';

@Injectable({
    providedIn: 'root'
})
export class ToppingGuard implements CanActivate {
    constructor(private store: Store<ProductsState>) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkStore().pipe(
            exhaustMap(() => of(true)),
            catchError(() => of(false))
        );
    }

    checkStore(): Observable<boolean> {
        return this.store.select(getToppingsLoaded).pipe(
            tap(loaded => {
                if (!loaded) {
                    this.store.dispatch(loadToppings());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
    }

}
