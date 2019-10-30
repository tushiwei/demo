import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeathersRoutingModule } from './weathers-routing.module';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';


@NgModule({
  declarations: [WeatherreportComponent],
  imports: [
    CommonModule,
    WeathersRoutingModule
  ]
})
export class WeathersModule { }
