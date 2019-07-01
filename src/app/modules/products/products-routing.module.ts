import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent, ProductItemComponent } from './containers';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: 'new',
        component: ProductItemComponent
    },
    {
        path: ':pizzaId',
        component: ProductItemComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
