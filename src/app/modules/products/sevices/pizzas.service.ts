import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Pizza } from '../models/pizza.model';

@Injectable({
    providedIn: 'root'
})
export class PizzasService {
    baseUrl: string = `${environment.baseUrl}/pizzas`;

    constructor(private http: HttpClient) {
    }

    getPizzas(): Observable<Pizza[]> {
        return this.http.get<Pizza[]>(`${this.baseUrl}`)
            .pipe(catchError((error: any) => throwError(error)));
    }

    createPizza(payload: Pizza): Observable<Pizza> {
        return this.http.post<Pizza>(`${this.baseUrl}`, payload)
            .pipe(catchError((error: any) => throwError(error)));
    }

    updatePizza(payload: Pizza): Observable<Pizza> {
        return this.http.put<Pizza>(`${this.baseUrl}/${payload.id}`, payload)
            .pipe(catchError((error: any) => throwError(error)));
    }

    deletePizza(payload: Pizza): Observable<void> {
        return this.http.delete<void>(`${this.baseUrl}/${payload.id}`)
            .pipe(catchError((error: any) => throwError(error)));
    }

}
