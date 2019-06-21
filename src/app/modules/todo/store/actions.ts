import { createAction, props } from '@ngrx/store';
import { Todo } from '../../../models';

export enum TodoActionTypes {
    ADD_TODO = '[Add Todo] Action'
}

export const createTodo = createAction(
    TodoActionTypes.ADD_TODO,
    props<Todo>()
);
