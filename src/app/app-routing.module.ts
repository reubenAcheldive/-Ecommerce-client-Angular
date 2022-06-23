import {NgModule} from '@angular/core';
import {RouterModule, Routes, PreloadAllModules, CanActivate} from '@angular/router';
import {AuthGuard} from './services/AuthGuard/AuthGuard.guard';
import {AuthGuardAdmin} from './services/AuthGuard/AuthGurdAdmin';
// const routes: Routes = [

// ];
@NgModule({
    imports: [
        RouterModule.forRoot(null, {preloadingStrategy: PreloadAllModules}),
    ],
    exports: [RouterModule]
})export class AppRoutingModule {}
