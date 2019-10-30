import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { TopCustomersComponent } from './top-customers/top-customers.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromCustomer from '../state/reducers/customer.reducer';
import { CustomerEffects } from '../state/effects/customer.effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [TopCustomersComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule,
    StoreModule.forFeature(fromCustomer.customersFeatureKey, fromCustomer.reducer),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomersModule { }
