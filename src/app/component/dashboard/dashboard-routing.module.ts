import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopNavModule } from '../dashboard/top-nav/top-nav.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './top-nav/side-nav/side-nav.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', component: SideNavComponent },

      {
        path: 'category/:categoryRef',
        component: SideNavComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
