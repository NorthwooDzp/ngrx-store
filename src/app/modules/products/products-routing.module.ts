import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent, ProductItemComponent } from './containers';
import { PizzasGuard } from './guards';
import { PizzaExistsGuard } from './guards/pizza-exists.guard';
import { ToppingGuard } from './guards/topping.guard';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent,
        canActivate: [PizzasGuard]
    },
    {
        path: 'new',
        component: ProductItemComponent,
        canActivate: [PizzasGuard]
    },
    {
        path: ':pizzaId',
        component: ProductItemComponent,
        canActivate: [PizzaExistsGuard, ToppingGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}
