import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';

import { back, go } from '../../../../store';
import { PizzasService } from '../../sevices';
import {
    createPizza,
    createPizzaFail,
    createPizzaSuccess,
    deletePizza,
    deletePizzaFail,
    deletePizzaSuccess,
    loadPizzas,
    loadPizzasFail,
    loadPizzasSuccess,
    updatePizza,
    updatePizzaFail, updatePizzaSuccess
} from '../actions/';
import { of } from 'rxjs';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';


@Injectable()
export class PizzasEffects {
    activeUrl: string;

    constructor(private actions$: Actions,
                private pizzasService: PizzasService) {
    }

    loadPizzas$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPizzas),
            exhaustMap(() =>
                this.pizzasService.getPizzas().pipe(
                    map(pizzas => loadPizzasSuccess({pizzas})),
                    catchError(err => of(loadPizzasFail(err)))
                )
            )
        )
    );

    createPizza$ = createEffect(() =>
        this.actions$.pipe(
            ofType(createPizza),
            map(action => action.pizza),
            exhaustMap(payload =>
                this.pizzasService.createPizza(payload).pipe(
                    map(pizza => createPizzaSuccess({pizza})),
                    catchError(err => of(createPizzaFail(err)))
                )
            )
        )
    );

    $updatePizza$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updatePizza),
            map(action => action.pizza),
            exhaustMap(payload =>
                this.pizzasService.updatePizza(payload).pipe(
                    map(pizza => updatePizzaSuccess({pizza})),
                    catchError(err => of(updatePizzaFail({err})))
                )
            )
        )
    );

    removePizza$ = createEffect(() =>
        this.actions$.pipe(
            ofType(deletePizza),
            map(action => action.pizza),
            exhaustMap(pizza =>
                this.pizzasService.deletePizza(pizza).pipe(
                    map(() => deletePizzaSuccess({pizza})),
                    catchError(err => of(deletePizzaFail({err})))
                )
            )
        )
    );

    createPizzaSuccess$ = createEffect(() =>
            this.actions$.pipe(
                ofType(createPizzaSuccess),
                map(action => action.pizza),
                map(pizza => {
                    console.log('navigation');
                    return go({route: {path: [`${this.activeUrl.replace('new', `${pizza.id}`)}`]}});
                })
            ),
        {dispatch: true}
    );

    deletePizzaSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(updatePizzaSuccess, deletePizzaSuccess),
            map(() => back())
        )
    );

    getCurrentUrl$ = createEffect(() =>
            this.actions$.pipe(
                ofType(ROUTER_NAVIGATED),
                tap((action: RouterNavigatedAction) => {
                    this.activeUrl = action.payload.routerState.url;
                })
            ),
        {dispatch: false});
}
