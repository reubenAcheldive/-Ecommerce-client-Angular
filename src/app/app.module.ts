import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { shoppingReducer } from './state/reducers';
import { ShoppingEffects } from './state/effects/ShoppingStoreEffect';
import { AuthEffects } from './state/effects/auth-effects';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { JwtInterceptor } from './services/interceptors/jwt.interceptor';
import { AuthGuard } from './services/AuthGuard/AuthGuard.guard';
import { AuthGuardAdmin } from './services/AuthGuard/AuthGurdAdmin';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    StoreModule.forRoot({ shoppingFeature: shoppingReducer }),
    EffectsModule.forRoot([AuthEffects, ShoppingEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },

    AuthGuard,
    AuthGuardAdmin,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
