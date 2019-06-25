import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Topping } from '../../models/topping.model';

const PIZZA_TOPPINGS_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PizzaToppingsComponent),
    multi: true
};

@Component({
    selector: 'app-pizza-toppings',
    templateUrl: './pizza-toppings.component.html',
    styleUrls: ['./pizza-toppings.component.scss'],
    providers: [PIZZA_TOPPINGS_ACCESSOR]
})
export class PizzaToppingsComponent implements ControlValueAccessor {
    @Input() toppings: Topping[] = [];

    value: Topping[] = [];

    private onTouch: () => void;
    private onModelChange: (val: Topping[]) => void;

    registerOnChange(fn: (val: Topping[]) => void): void {
        this.onModelChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouch = fn;
    }

    writeValue(value: Topping[]): void {
        this.value = value;
    }

    selectTopping(topping: Topping): void {
        if (this.existInToppings(topping)) {
            this.value = this.value.filter(item => item.id !== topping.id);
        } else {
            this.value = [...this.value, topping];
        }
        this.onTouch();
        this.onModelChange(this.value);
    }

    existInToppings(topping: Topping): boolean {
        return this.value.some(item => item.id === topping.id);
    }


}
