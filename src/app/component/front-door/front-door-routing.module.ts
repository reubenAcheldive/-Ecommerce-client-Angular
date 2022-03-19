import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontDoorComponent } from './front-door.component';


const routes: Routes = [{ path: '', component: FrontDoorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDoorRoutingModule { }
