import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from "./invoice/invoice.component";
import { OrderComponent } from './order.component';


const routes: Routes = [{ path: '', component: OrderComponent },{ path:"invoice",component:InvoiceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderPageRoutingModule { }
