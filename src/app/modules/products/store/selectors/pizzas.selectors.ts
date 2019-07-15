import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../store';
import * as fromPizzas from '../reducers/pizzas.reducer';
import * as fromToppings from './toppings.selectors';
import { getProductsState, ProductsState } from '../reducers';
import { Pizza } from '../../models';

export const getPizzasState = createSelector(
    getProductsState,
    (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
    getPizzasState,
    fromPizzas.getPizzasEntities
);

export const getAllPizzas = createSelector(
    getPizzasEntities,
    (entities) => Object.keys(entities).map(id => entities[id])
);

export const getPizzasLoading = createSelector(
    getPizzasState,
    fromPizzas.getPizzasLoading
);

export const getPizzasLoaded = createSelector(
    getPizzasState,
    fromPizzas.getPizzasLoaded
);

export const getSelectedPizza = createSelector(
    getPizzasEntities,
    fromRoot.getRouterState,
    (entities, router): Pizza => entities[router.state.params.pizzaId]
);

export const getPizzaVisualised = createSelector(
    getSelectedPizza,
    fromToppings.getToppingsEntities,
    fromToppings.getSelectedToppings,
    (pizza, toppingEntities, selectedToppings) => {
        const toppings = selectedToppings.map(id => toppingEntities[id]);
        return {...pizza, toppings};
    }
);
