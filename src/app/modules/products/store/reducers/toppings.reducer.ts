import { createReducer, on } from '@ngrx/store';
import { Topping } from '../../models';

import * as fromToppings from '../actions/toppings.actions';

export interface ToppingsState {
    entities: { [id: number]: Topping };
    loading: boolean;
    loaded: boolean;
}

export const initialState: ToppingsState = {
    entities: {},
    loaded: false,
    loading: false
};

const reducer = createReducer(
    initialState,
    on()
)
