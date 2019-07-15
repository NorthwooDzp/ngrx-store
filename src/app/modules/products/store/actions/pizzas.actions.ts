import { createAction, props } from '@ngrx/store';
import { Pizza } from '../../models';

export enum PizzasActionTypes {
    // load pizzas
    LoadPizzas = '[Products] Load Pizzas',
    LoadPizzasFail = '[Products] Load Pizzas Fail',
    LoadPizzasSuccess = '[Products] Load Pizzas Success',

    // create pizza
    CreatePizza = '[Products] Create Pizza',
    CreatePizzaFail = '[Products] Create Pizza Fail',
    CreatePizzaSuccess = '[Products] Create Pizza Success',

    // update pizza
    UpdatePizza = '[Products] Update Pizza',
    UpdatePizzaFail = '[Products] Update Pizza Fail',
    UpdatePizzaSuccess = '[Products] Update Pizza Success',

    // delete pizza
    DeletePizza = '[Products] Delete Pizza',
    DeletePizzaFail = '[Products] Delete Pizza Fail',
    DeletePizzaSuccess = '[Products] Delete Pizza Success'
}

// load actions
export const loadPizzas = createAction(PizzasActionTypes.LoadPizzas);
export const loadPizzasFail = createAction(PizzasActionTypes.LoadPizzasFail, props<{err: any}>());
export const loadPizzasSuccess = createAction(PizzasActionTypes.LoadPizzasSuccess, props<{pizzas: Pizza[]}>());

// create actions

export const createPizza = createAction(PizzasActionTypes.CreatePizza, props<{pizza: Pizza}>());
export const createPizzaFail = createAction(PizzasActionTypes.CreatePizzaFail, props<{err: any}>());
export const createPizzaSuccess = createAction(PizzasActionTypes.CreatePizzaSuccess, props<{pizza: Pizza}>());
