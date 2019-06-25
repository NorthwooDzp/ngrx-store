import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';
import {
    PizzaDisplayComponent,
    PizzaFormComponent,
    PizzaItemComponent,
    PizzaToppingsComponent
} from './components';
import { ProductItemComponent, ProductsComponent } from './containers';

@NgModule({
    declarations: [
        PizzaDisplayComponent,
        PizzaFormComponent,
        PizzaItemComponent,
        PizzaToppingsComponent,
        ProductsComponent,
        ProductItemComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule {
}
