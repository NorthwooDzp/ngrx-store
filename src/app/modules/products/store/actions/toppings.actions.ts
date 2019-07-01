import { createAction, props } from '@ngrx/store';
import { Topping } from '../../models';

export enum ToppingsActionTypes {
    LoadToppings = '[Products] Load Toppings',
    LoadToppingsFail = '[Products] Load Toppings Fail',
    LoadToppingsSuccess = '[Products] Load Toppings Success',
}

export const loadToppings = createAction(ToppingsActionTypes.LoadToppings);

export const loadToppingsFail = createAction(
    ToppingsActionTypes.LoadToppingsFail,
    props<{ err: any }>()
);

export const loadToppingsSuccess = createAction(
    ToppingsActionTypes.LoadToppingsSuccess,
    props<{ toppings: Topping[] }>()
);

