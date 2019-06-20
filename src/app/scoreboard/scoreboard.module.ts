import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as scoreBoardReducer from '../scoreboard-redux/scoreboard-reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forFeature('game', scoreBoardReducer.reducer)
    ]
})
export class ScoreboardModule {
}
