import { Action, createReducer, on } from '@ngrx/store';

import { Topping } from '../../models';
import * as fromToppings from '../actions/toppings.actions';
import { getEntitiesFromArray } from '../helpers';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loading: boolean;
    loaded: boolean;
    selectedToppings: number[];
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false,
    selectedToppings: []
};

const reducer = createReducer(
    initialState,
    on(fromToppings.loadToppings, state => ({
        ...state,
        loading: true,
        loaded: false
    })),
    on(fromToppings.loadToppingsSuccess, (state, payload) => {
        const {toppings} = payload;
        const entities = getEntitiesFromArray<Topping>(toppings, {...state.entities});
        return {
            ...state,
            entities,
            loaded: true,
            loading: false
        };
    }),
    on(fromToppings.loadToppingsFail, state => ({
        ...state,
        loading: false,
        loaded: false
    })),
    on(fromToppings.visualiseToppings, (state, payload) => ({
        ...state,
        selectedToppings: [...payload.selectedToppings]
    }))
);

export function toppingsReducer(state: ToppingsState | undefined, action: Action) {
    return reducer(state, action);
}

export const getToppingsEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
