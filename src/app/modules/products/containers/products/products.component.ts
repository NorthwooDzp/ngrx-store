import { Component, OnInit } from '@angular/core';
import { Pizza } from '../../models/pizza.model';
import { PizzasService } from '../../sevices/pizzas.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    pizzas: Pizza[];

    constructor(private pizzaService: PizzasService) {
    }

    ngOnInit() {
        this.pizzaService.getPizzas()
            .subscribe(pizzas => {
                this.pizzas = pizzas;
            });
    }

}
