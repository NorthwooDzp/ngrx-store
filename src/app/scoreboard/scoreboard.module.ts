import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import * as scoreBoardReducer from '../scoreboard-redux/scoreboard-reducer';
import { ScoreboardRoutingModule } from './scoreboard-routing.module';
import { ScoreboardComponent } from './components';

@NgModule({
    declarations: [ScoreboardComponent],
    imports: [
        CommonModule,
        ScoreboardRoutingModule,
        StoreModule.forFeature( 'game', scoreBoardReducer.reducer)
    ]
})
export class ScoreboardModule {
}
