import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, exhaustMap } from 'rxjs/operators';

import { PizzasService } from '../../sevices';
import { loadPizzas, loadPizzasFail, loadPizzasSuccess } from '../actions/';
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
}
