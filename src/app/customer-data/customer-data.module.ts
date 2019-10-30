import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerDataRoutingModule } from './customer-data-routing.module';
import { ManagerComponent } from './manager/manager.component';


@NgModule({
  declarations: [ManagerComponent],
  imports: [
    CommonModule,
    CustomerDataRoutingModule
  ]
})
export class CustomerDataModule { }
