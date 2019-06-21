import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {
    TodoItemComponent,
    TodoListComponent
} from './components';

@NgModule({
    declarations: [TodoListComponent, TodoItemComponent],
    imports: [
        CommonModule,
        TodoRoutingModule
    ]
})
export class TodoModule {
}
