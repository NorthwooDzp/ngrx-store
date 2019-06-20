import { createAction } from '@ngrx/store';


export const homeScore = createAction('[Scoreboard Page] Home Score');
export const awayScore = createAction('[Scoreboard Page] Away Score');
export const reset = createAction('[Scoreboard Page] Reset Score');

