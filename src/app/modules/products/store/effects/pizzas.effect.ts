import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';

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
    updatePizzaFail
} from '../actions/';
import { of } from 'rxjs';


@Injectable()
export class PizzasEffects {

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
                    map(pizza => createPizzaSuccess({pizza})),
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
}
