import { createAction, props } from '@ngrx/store';
import { Pizza } from '../../models';

export enum PizzasActionTypes {
    LoadPizzas = '[Products] Load Pizzas',
    LoadPizzasFail = '[Products] Load Pizzas Fail',
    LoadPizzasSuccess = '[Products] Load Pizzas Success'
}

export const loadPizzas = createAction(PizzasActionTypes.LoadPizzas);

export const loadPizzasFail = createAction(PizzasActionTypes.LoadPizzasFail, props<{err: any}>());

export const loadPizzasSuccess = createAction(PizzasActionTypes.LoadPizzasSuccess, props<{pizzas: Pizza[]}>());
