import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules, CanActivate} from '@angular/router';
import {AuthGuard} from './services/AuthGuard/AuthGuard.guard';
import {AuthGuardAdmin} from './services/AuthGuard/AuthGurdAdmin';
const routes: Routes = [{
        path: '',
        loadChildren: () => import ('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
{
  path:"**",redirectTo:"/store",pathMatch:"full"
}

  ];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule]
})export class AppRoutingModule {}
// "catagories"
