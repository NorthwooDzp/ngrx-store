import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';

import * as ScoreboardActions from '../../../scoreboard-redux/scoreboard-page.actions';
import { ScoreboardState } from '../../../scoreboard-redux/scoreboard-reducer';

@Component({
    selector: 'app-scoreboard',
    templateUrl: './scoreboard.component.html',
    styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
    home$: Observable<number>;
    away$: Observable<number>;

    constructor(private store: Store<ScoreboardState>) {
        this.home$ = this.store.pipe(select('game', 'home'));
        this.away$ = this.store.pipe(select('game', 'away'));
    }

    ngOnInit() {
    }

    addHome(): void {
        this.store.dispatch(ScoreboardActions.homeScore());
    }

    addAway(): void {
        this.store.dispatch(ScoreboardActions.awayScore());
    }

    resetScore(): void {
        this.store.dispatch(ScoreboardActions.reset());
    }

}
