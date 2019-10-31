import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { BartChartData } from 'src/app/model/customer.model';
import { BarVerticalComponent } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  @Input()
  data: Array<BartChartData>;
  @Input()
  view: any[] = [700, 400];
  @Input()
  showLegend = true;
  @Input()
  colorScheme = {
    domain: ['red', 'red', 'green', 'yellow']
  };

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showXAxisLabel = true;
  @Input()
  xAxisLabel = 'Customer';
  showYAxisLabel = true;
  @Input()
  yAxisLabel = 'Employee Numbers';

  constructor() { }

  ngOnInit() {
  }

}
