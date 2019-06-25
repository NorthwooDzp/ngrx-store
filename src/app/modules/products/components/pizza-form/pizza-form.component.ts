import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Pizza } from '../../models/pizza.model';
import { Topping } from '../../models/topping.model';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-pizza-form',
    templateUrl: './pizza-form.component.html',
    styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent implements OnChanges {
    exists: boolean = false;
    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        toppings: new FormControl([])
    });

    @Input() pizza: Pizza;
    @Input() toppings: Topping[];

    @Output() selected: EventEmitter<number[]> = new EventEmitter();
    @Output() create: EventEmitter<Pizza> = new EventEmitter();
    @Output() update: EventEmitter<Pizza> = new EventEmitter();
    @Output() remove: EventEmitter<Pizza> = new EventEmitter();


    constructor() {
    }

    get nameControl(): FormControl {
        return this.form.get('name') as FormControl;
    }

    get nameControlInvalid(): boolean {
        return this.nameControl.hasError('required') && this.nameControl.touched;
    }

    ngOnChanges(): void {
        if (this.pizza && this.pizza.id) {
            this.exists = true;
            this.form.patchValue(this.pizza);
        }
        this.form.get('toppings')
            .valueChanges.pipe(
            map(toppings => toppings.map((topping: Topping) => topping.id))
        )
            .subscribe(value => this.selected.emit(value));
    }

    createPizza(): void {
        const {value, valid} = this.form;
        if (valid) {
            this.create.emit(value);
        }
    }

    updatePizza(): void {
        const {value, valid, touched} = this.form;
        if (valid && touched) {
            this.update.emit({...this.pizza, ...value});
        }
    }

    removePizza(): void {
        const {value} = this.form;
        this.remove.emit({...this.pizza, ...value});
    }

}
