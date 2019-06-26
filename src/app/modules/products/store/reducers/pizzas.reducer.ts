import { Pizza } from '../../models/pizza.model';
import { Action, createReducer, on } from '@ngrx/store';
import * as fromPizzas from '../actions/pizzas.actions';


export interface PizzasState {
    data: Pizza[];
    loaded?: boolean;
    loading: boolean;
}

export const initialState: PizzasState = {
    data: [
        {
            name: 'Blazin\' Inferno',
            toppings: [
                {
                    id: 10,
                    name: 'pepperoni'
                },
                {
                    id: 9,
                    name: 'pepper'
                },
                {
                    id: 3,
                    name: 'basil'
                },
                {
                    id: 4,
                    name: 'chili'
                },
                {
                    id: 7,
                    name: 'olive'
                },
                {
                    id: 2,
                    name: 'bacon'
                }
            ],
            id: 1
        },
        {
            name: 'Seaside Surfin\'',
            toppings: [
                {
                    id: 6,
                    name: 'mushroom'
                },
                {
                    id: 2,
                    name: 'bacon'
                },
                {
                    id: 3,
                    name: 'basil'
                },
                {
                    id: 1,
                    name: 'anchovy'
                },
                {
                    id: 8,
                    name: 'onion'
                },
                {
                    id: 11,
                    name: 'sweetcorn'
                },
                {
                    id: 5,
                    name: 'mozzarella'
                },
                {
                    id: 7,
                    name: 'olive'
                },
                {
                    id: 9,
                    name: 'pepper'
                },
                {
                    id: 12,
                    name: 'tomato'
                }
            ],
            id: 2
        },
        {
            name: 'Plain Ol\' Pepperoni',
            toppings: [
                {
                    id: 10,
                    name: 'pepperoni'
                },
                {
                    id: 6,
                    name: 'mushroom'
                }
            ],
            id: 3
        },
        {
            name: 'Some pizza',
            toppings: [
                {
                    id: 2,
                    name: 'bacon'
                },
                {
                    id: 3,
                    name: 'basil'
                },
                {
                    id: 7,
                    name: 'olive'
                },
                {
                    id: 6,
                    name: 'mushroom'
                },
                {
                    id: 10,
                    name: 'pepperoni'
                },
                {
                    id: 11,
                    name: 'sweetcorn'
                },
                {
                    id: 12,
                    name: 'tomato'
                },
                {
                    id: 8,
                    name: 'onion'
                },
                {
                    id: 4,
                    name: 'chili'
                },
                {
                    id: 1,
                    name: 'anchovy'
                },
                {
                    id: 5,
                    name: 'mozzarella'
                },
                {
                    id: 9,
                    name: 'pepper'
                }
            ],
            id: 4
        }
    ],
    loaded: false,
    loading: false
};

const reducer = createReducer(initialState,
    on(fromPizzas.loadPizzas, state => (
        {
            ...state,
            loading: true,
            loaded: false
        }
    )),
    on(fromPizzas.loadPizzaSuccess, (state, payload) => (
        {
            ...state,
            data: payload,
            loaded: true,
            loading: false
        }
    )),
    on(fromPizzas.loadPizzaFail, state => (
        {
            ...state,
            loading: false,
            loaded: false
        }
    ))
);

export function pizzasReducer(state: PizzasState | undefined, action: Action) {
    return reducer(state, action);
}

export const getPizzasLoading = (state: PizzasState) => state.loading;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
export const getPizzas = (state: PizzasState) => state.data;
