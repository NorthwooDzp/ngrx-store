import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ProductsState } from '../store/reducers';
import { checkStore } from './checkStore';
import { exhaustMap, map, take } from 'rxjs/operators';
import { getPizzasEntities } from '../store/selectors';

@Injectable({
    providedIn: 'root'
})
export class PizzaExistsGuard implements CanActivate {
    constructor(private store: Store<ProductsState>) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return checkStore(this.store).pipe(
            exhaustMap(() => {
                const id = next.params.pizzaId;
                return this.hasPizza(id);
            })
        );
    }

    hasPizza(id: number): Observable<boolean> {
        return this.store.select(getPizzasEntities).pipe(
            map(entities => !!entities[id]),
            take(1)
        );
    }

}
