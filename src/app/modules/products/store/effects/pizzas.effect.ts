import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';

import { PizzasService } from '../../sevices';
import {
    createPizza,
    createPizzaFail,
    createPizzaSuccess,
    loadPizzas,
    loadPizzasFail,
    loadPizzasSuccess
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
            exhaustMap(action =>
                this.pizzasService.createPizza(action.pizza).pipe(
                    map(pizza => createPizzaSuccess({pizza})),
                    catchError(err => of(createPizzaFail(err)))
                )
            )
        )
    );
}
