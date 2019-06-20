import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { actionLogin } from '../counter-redux';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    login: Observable<string>;
    password: Observable<string>;
    loginInput: string;
    passInput: string;

    constructor(private store: Store<{ login: string; password: string }>) {
        this.login = store.pipe(select('login', 'login'));
        this.password = store.pipe(select('login', 'password'));
    }

    ngOnInit() {
    }

    submitForm(): void {
        this.store.dispatch(actionLogin({login: this.loginInput, password: this.passInput}));
    }

}
