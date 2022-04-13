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
    path: 'home-page',
    loadChildren: () =>
      import('./component/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./component/userAuth/registration/registration.module').then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: 'home-page/front-door',
    // canActivate: [AuthGuard, AuthGuardAdmin],
    loadChildren: () =>
      import('./component/front-page/front-page.module').then(
        (m) => m.FrontDoorModule
      ),
  },

  {
    path: 'store',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./component/shopStore/shop-store.module').then(
        (m) => m.ShopStoreModule
      ),
  },
  {
    path: 'store/order',
    // canActivate: [AuthGuard, AuthGuardAdmin],
    loadChildren: () =>
      import('./component/order/order.module').then((m) => m.OrderModule),
  },

  { path: '**', redirectTo: '/home-page', pathMatch: 'full' },
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
