import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from './scoreboard-page.actions';

export interface ScoreboardState {
    home: number;
    away: number;
}

export const initialState: ScoreboardState = {
    away: 0,
    home: 0
};

const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.homeScore, state => ({...state, home: state.home + 1})),
    on(ScoreboardPageActions.awayScore, state => ({...state, away: state.away + 1})),
    on(ScoreboardPageActions.reset, state => ({home: 0, away: 0}))
);

export function reducer(state: ScoreboardState | undefined, action: Action) {
    return scoreboardReducer(state, action);
}
