import { Component, Input } from '@angular/core';
import { Pizza } from '../../models/pizza.model';

@Component({
    selector: 'app-pizza-item',
    templateUrl: './pizza-item.component.html',
    styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent {
    @Input() pizza: Pizza;
}
