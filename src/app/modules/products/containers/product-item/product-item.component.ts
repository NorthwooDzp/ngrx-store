import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Pizza, Topping } from '../../models';
import * as fromStore from '../../store';
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
    pizza$: Observable<Pizza>;
    visualize$: Observable<Pizza>;
    toppings$: Observable<Topping[]>;

    constructor(private store: Store<fromStore.ProductsState>) {
    }

    ngOnInit(): void {
        this.pizza$ = this.store.select(fromStore.getSelectedPizza).pipe(
            tap((pizza: Pizza = null) => {
                const exists = !!(pizza && pizza.toppings);
                const selectedToppings = exists
                    ? pizza.toppings.map(item => item.id)
                    : [];
                this.store.dispatch(fromStore.visualiseToppings({selectedToppings}));
            })
        );
        this.toppings$ = this.store.select(fromStore.getAllToppings);
        this.visualize$ = this.store.select(fromStore.getPizzaVisualised);
    }

    onSelect(event: number[]): void {
        this.store.dispatch(fromStore.visualiseToppings({selectedToppings: event}));
    }

    onCreate(pizza: Pizza): void {
        this.store.dispatch(fromStore.createPizza({pizza}));
    }

    onUpdate(pizza: Pizza): void {
        this.store.dispatch(fromStore.updatePizza({pizza}));
    }

    onRemove(pizza: Pizza): void {
        const remove = window.confirm('Are you sure?');
        if (remove) {
            this.store.dispatch(fromStore.deletePizza({pizza}));
        }
    }

}
