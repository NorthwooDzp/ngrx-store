import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset, actionLogin } from './counter.actions';

export const initialState = 0;
const initialLogin = {
    login: '1234',
    password: '12341234'
};

export const counterReducer = createReducer(
    initialState,
    on(increment, state => state + 1),
    on(decrement, state => state - 1),
    on(reset, state => 0)
);

export const loginReducer = createReducer(
    initialLogin,
    on(actionLogin, loginFunc)
);

function loginFunc(state, payload) {
    console.log(payload);
    return {
        ...state,
        login: payload.login,
        password: payload.password
    };
}
