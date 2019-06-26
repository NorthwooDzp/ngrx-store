import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Pizza } from '../../models/pizza.model';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    pizzas$: Observable<Pizza[]>;

    constructor(private store: Store<fromStore.ProductsState>) {
    }

    ngOnInit() {
        this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    }

}
