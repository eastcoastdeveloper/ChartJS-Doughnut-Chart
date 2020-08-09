import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ChartsModule } from 'ng2-charts';

import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ChartsModule ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [ AppComponent, DoughnutChartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
