import { Action, createReducer, on } from '@ngrx/store';

import { Todo } from '../../../models';
import { createTodo } from './actions';

const initialState: {todos: Todo[]} = {
    todos: []
}

const reducer = createReducer(
    initialState,
    on(createTodo, (state, payload) => ({todos: [...state.todos, payload]}))
);

export function todoReducer(state: {todos: Todo[]} | undefined, action: Action) {
    return reducer(state, action);
}
