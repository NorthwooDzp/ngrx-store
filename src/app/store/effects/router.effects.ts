import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { back, go, forward } from '../actions';
import { map, tap } from 'rxjs/operators';


@Injectable()
export class RouterEffects {

    constructor(private actions$: Actions,
                private router: Router,
                private location: Location) {
    }

    navigate$ = createEffect(() =>
            this.actions$.pipe(
                ofType(go),
                map(action => action.route),
                tap(({path, query: queryParams, extras}) =>
                    this.router.navigate(path, {...queryParams, ...extras})
                )
            ),
        {dispatch: false}
    );

    navigateBack$ = createEffect(() =>
            this.actions$.pipe(
                ofType(back),
                tap(() => this.location.back())
            ),
        {dispatch: false}
    );

    navigateForward$ = createEffect(() =>
            this.actions$.pipe(
                ofType(forward),
                tap(() => this.location.forward())
            ),
        {dispatch: false}
    );
}
