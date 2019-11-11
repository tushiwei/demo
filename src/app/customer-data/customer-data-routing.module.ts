import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';


const customerDataRoutes: Routes = [
  {path: '', component: ManagerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(customerDataRoutes)],
  exports: [RouterModule]
})
export class CustomerDataRoutingModule { }
