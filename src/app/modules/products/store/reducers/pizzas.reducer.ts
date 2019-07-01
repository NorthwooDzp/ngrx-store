import { Action, createReducer, on } from '@ngrx/store';

import { Pizza } from '../../models';
import * as fromPizzas from '../actions/pizzas.actions';

export interface PizzasState {
    entities: { [id: number]: Pizza };
    loaded?: boolean;
    loading: boolean;
}

export const initialState: PizzasState = {
    entities: {},
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
        )
    ),
    on(fromPizzas.loadPizzasSuccess, (state, payload) => {
            const {pizzas} = payload;
            const entities = pizzas.reduce((enttites: {[id: number]: Pizza}, pizza) => ({
                    ...enttites,
                    [pizza.id]: pizza
                }),
                {...state.entities});
            return {
                ...state,
                entities,
                loaded: true,
                loading: false
            };
        }
    ),
    on(fromPizzas.loadPizzasFail, state => (
            {
                ...state,
                loading: false,
                loaded: false
            }
        )
    )
);

export function pizzasReducer(state: PizzasState | undefined, action: Action) {
    return reducer(state, action);
}

export const getPizzasEntities = (state: PizzasState) => state.entities;
export const getPizzasLoading = (state: PizzasState) => state.loading;
export const getPizzasLoaded = (state: PizzasState) => state.loaded;
