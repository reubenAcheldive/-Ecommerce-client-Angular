import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { MatButtonModule } from '@angular/material/button';

import { MatMenuModule } from '@angular/material/menu';
import { OrderModule } from './components/dashboard/order/order.module';

import { LinksNavModule } from './UI/links-nav/links-nav.module';
import { IconInfoModule } from './UI/icon-info/icon-info.module';
import { ContentNameComponent } from './UI/content-name/content-name.component';

@NgModule({
  declarations: [AppComponent, NavBarComponent, ContentNameComponent],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,

    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ shoppingFeature: shoppingReducer }),
    EffectsModule.forRoot([AuthEffects, ShoppingEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    MatToolbarModule,
    MatDialogModule,

    AuthenticationModule,
    MatButtonModule,
    MatMenuModule,
    OrderModule,
    LinksNavModule,
    IconInfoModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
