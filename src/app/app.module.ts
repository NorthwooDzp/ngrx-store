import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

import { CustomSerializer, reducers, RouterEffects } from './store';

export const metaReducers: MetaReducer<any>[] = !environment.production
    ? [storeFreeze]
    : [];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        EffectsModule.forRoot([RouterEffects]),
        StoreRouterConnectingModule.forRoot({
            serializer: CustomSerializer
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : []
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
