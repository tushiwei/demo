import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherreportComponent } from './weatherreport/weatherreport.component';


const wrRoutes: Routes = [
  {path: 'weather', component: WeatherreportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(wrRoutes)],
  exports: [RouterModule]
})
export class WeathersRoutingModule { }
