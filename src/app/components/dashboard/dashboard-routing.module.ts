import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';

const routes: Routes = [
    {
        path: '/',
        component: DashboardComponent
    }, {
        path: 'store',
        loadChildren: () => import ('../dashboard/store/store.module').then(m => m.StoreModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
