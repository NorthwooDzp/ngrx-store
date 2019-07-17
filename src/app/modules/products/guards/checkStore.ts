import { Observable } from 'rxjs';
import { getPizzasLoaded } from '../store/selectors';
import { filter, take, tap } from 'rxjs/operators';
import { loadPizzas } from '../store/actions';
import { Store } from '@ngrx/store';
import { ProductsState } from '../store/reducers';


export const checkStore = (store: Store<ProductsState>): Observable<boolean> => {
    return store.select(getPizzasLoaded)
        .pipe(
            tap(loaded => {
                if (!loaded) {
                    store.dispatch(loadPizzas());
                }
            }),
            filter(loaded => loaded),
            take(1)
        );
};
