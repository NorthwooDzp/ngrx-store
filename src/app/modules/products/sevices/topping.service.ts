import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { Topping } from '../models/topping.model';

@Injectable({
    providedIn: 'root'
})
export class ToppingService {
    baseUrl: string = `baseUrl: string = \`${environment.baseUrl}/toppings`;

    constructor(private http: HttpClient) {
    }

    getToppings(): Observable<Topping[]> {
        return this.http.get<Topping[]>(this.baseUrl)
            .pipe(catchError((error: any) => throwError(error)));
    }
}
