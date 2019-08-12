import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductsState } from '../store/reducers';
import { catchError, exhaustMap} from 'rxjs/operators';
import { checkStore } from './checkStore';

@Injectable({
    providedIn: 'root'
})
export class PizzasGuard implements CanActivate {
    constructor(private store: Store<ProductsState>) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return checkStore(this.store).pipe(
            exhaustMap(() => of(true)),
            catchError(() => of(false))
        );
    }

}
