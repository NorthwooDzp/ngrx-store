import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ToppingService } from '../../sevices';

import {
    loadToppings,
    loadToppingsFail,
    loadToppingsSuccess
} from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class ToppingsEffects {
    constructor(private actions$: Actions,
                private toppingService: ToppingService) {
    }

    loadToppings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadToppings),
            exhaustMap(() =>
                this.toppingService.getToppings().pipe(
                    map(toppings => loadToppingsSuccess({toppings})),
                    catchError(err => of(loadToppingsFail(err)))
                )
            )
        )
    );
}
