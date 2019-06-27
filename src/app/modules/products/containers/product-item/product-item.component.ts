import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import { PizzasService, ToppingService } from '../../sevices';

@Component({
    selector: 'app-product-item',
    templateUrl: './product-item.component.html',
    styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
    pizza: Pizza;
    visualize: Pizza;
    toppings: Topping[];

    constructor(private pizzaService: PizzasService,
                private toppingsService: ToppingService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.pizzaService.getPizzas()
            .subscribe(pizzas => {
                const param = this.route.snapshot.params.id;
                let pizza: Pizza;
                if (param === 'new') {
                    pizza = {};
                } else {
                    pizza = pizzas.find(item => item.id === Number(param));
                }
                this.pizza = pizza;
                this.toppingsService.getToppings()
                    .subscribe(toppings => {
                        this.toppings = toppings;
                        this.onSelect(toppings.map(item => item.id));
                    });
            });
    }

    onSelect(event: number[]): void {
        let toppings: Topping[];
        if (this.toppings && this.toppings.length) {
            toppings = event.map(id =>
                this.toppings.find(item => item.id === id)
            );
        } else {
            toppings = this.pizza.toppings;
        }
        this.visualize = {...this.pizza, toppings};
    }

    onCreate(event: Pizza): void {
        this.pizzaService.createPizza(event)
            .subscribe(pizza => {
                this.router.navigate(['/products']);
            });
    }

    onUpdate(event: Pizza): void {
        this.pizzaService.updatePizza(event)
            .subscribe(() => {
                this.router.navigate(['/products']);
            });
    }

    onRemove(event: Pizza): void {
        const remove = window.confirm('Are you sure?');
        if (remove) {
            this.pizzaService.deletePizza(event)
                .subscribe(() => {
                    this.router.navigate(['/products']);
                });
        }
    }

}
