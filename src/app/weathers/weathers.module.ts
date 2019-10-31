import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeathersRoutingModule } from './weathers-routing.module';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';
import { StoreModule } from '@ngrx/store';
import * as fromOpenweather from '../state/reducers/openweather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OpenweatherEffects } from '../state/effects/openweather.effects';


@NgModule({
  declarations: [WeatherreportComponent],
  imports: [
    CommonModule,
    WeathersRoutingModule,
    StoreModule.forFeature(fromOpenweather.openweatherFeatureKey, fromOpenweather.reducer),
    EffectsModule.forFeature([OpenweatherEffects])
  ]
})
export class WeathersModule { }
