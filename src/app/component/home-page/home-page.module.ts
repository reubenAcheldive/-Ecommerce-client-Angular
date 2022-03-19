import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { LoginModule } from '../userAuth/login/login.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    HomePageComponent,
    AboutComponent,
    StatisticsComponent,

  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    LoginModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,

  ],

})
export class HomePageModule { }
