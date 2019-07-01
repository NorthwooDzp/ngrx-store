import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pizza, Topping } from '../../models';
import * as fromStore from '../../store';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
    pizza$: Observable<Pizza>;
    visualize: Pizza;
    toppings: Topping[];

    constructor(private store: Store<fromStore.ProductsState>) {
    }

    ngOnInit(): void {
        this.pizza$ = this.store.select(fromStore.getSelectedPizza);
    }

    onSelect(event: number[]): void {
        /*let toppings: Topping[];
        if (this.toppings && this.toppings.length) {
            toppings = event.map(id =>
                this.toppings.find(item => item.id === id)
            );
        } else {
            toppings = this.pizza.toppings;
        }
        this.visualize = {...this.pizza, toppings};*/
    }

    onCreate(event: Pizza): void {
        /*this.pizzaService.createPizza(event)
            .subscribe(pizza => {
                this.router.navigate(['/products']);
            });*/
    }

    onUpdate(event: Pizza): void {
        /*this.pizzaService.updatePizza(event)
            .subscribe(() => {
                this.router.navigate(['/products']);
            });*/
    }

    onRemove(event: Pizza): void {
        const remove = window.confirm('Are you sure?');
        if (remove) {
            /*this.pizzaService.deletePizza(event)
                .subscribe(() => {
                    this.router.navigate(['/products']);
                });*/
        }
    }

}
