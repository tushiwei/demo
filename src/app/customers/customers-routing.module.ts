import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopCustomersComponent } from './top-customers/top-customers.component';

const customerRoutes: Routes = [
  {path: '', component: TopCustomersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
