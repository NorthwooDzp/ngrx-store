import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { counterReducer } from './counter-redux';

@NgModule({
    declarations: [
        AppComponent,
        MyCounterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({count: counterReducer})
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
