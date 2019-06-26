import { createAction, props } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

export enum PizzasActionTypes {
    LoadPizzas = '[Products] Load Pizzas',
    LoadPizzasFail = '[Products] Load Pizzas Fail',
    LoadPizzasSuccess = '[Products] Load Pizzas Success'
}

export const loadPizzas = createAction(PizzasActionTypes.LoadPizzas);

export const loadPizzaFail = createAction(PizzasActionTypes.LoadPizzasFail);

export const loadPizzaSuccess = createAction(PizzasActionTypes.LoadPizzasSuccess, props<Pizza[]>());
