import { createAction, props } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';

export enum RouterActionsTypes {
    Go = '[Router] Go',
    Back = '[Router] Back',
    Forward = '[Router] Forward'
}

export const go = createAction(RouterActionsTypes.Go, props<{
    route: {
        path: any[];
        query?: object;
        extras?: NavigationExtras
    }
}>());

export const back = createAction(RouterActionsTypes.Back);

export const forward = createAction(RouterActionsTypes.Forward);
