import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule} from '@swimlane/ngx-charts';

import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  exports: [BarChartComponent, NgxChartsModule]
})
export class SharedModule { }
