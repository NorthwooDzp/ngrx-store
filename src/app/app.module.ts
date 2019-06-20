import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScoreboardModule } from './scoreboard/scoreboard.module';
import { ScoreboardComponent } from './scoreboard/components';


@NgModule({
    declarations: [
        AppComponent,
        ScoreboardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        StoreModule.forRoot({}),
        ScoreboardModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
