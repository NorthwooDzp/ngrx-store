import { routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

export interface State {
    routerReducer: RouterReducerState<RouterStateUrl>;
}

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export const reducers: ActionReducerMap<State> = {
    routerReducer
};

export const getRouterState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('routerReducer');

export class CustomSerializer
    implements RouterStateSerializer<RouterStateUrl> {

    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        const {url} = routerState;
        const {queryParams} = routerState.root;

        let state: ActivatedRouteSnapshot = routerState.root;
        while (state.firstChild) {
            state = state.firstChild;
        }

        const {params} = state;

        return {params, queryParams, url};
    }

}
