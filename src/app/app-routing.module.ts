import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  PreloadAllModules,
  CanActivate,
} from '@angular/router';
import { AuthGuard } from './services/AuthGuard/AuthGuard.guard';
import { AuthGuardAdmin } from './services/AuthGuard/AuthGurdAdmin';
const routes: Routes = [
  {
    path: 'register',
    loadChildren: () =>
      import('./component/userAuth/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'online',
    loadChildren: () =>
<<<<<<< HEAD
      import('./component/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
=======
      import('./component/front-page/front-page.module').then(
        (m) => m.FrontDoorModule
>>>>>>> origin/master
      ),
  },
  

  { path: '**', redirectTo: '/online', pathMatch: 'full' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
