import { Component, Input,  OnInit } from '@angular/core';
import { ChartType, Chart } from 'chart.js';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent {

  chart:any;
  showcaseVal:number;

  @Input() jsonArray:any;

  ngAfterViewInit() {
    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: {
        labels: ['Label 1', 'Label 2'],
        datasets: [
          {
            data: this.jsonArray,
            backgroundColor: [
              'rgb(10, 175, 144)',
              'rgb(1, 100, 144)'
            ],
            hoverBackgroundColor: [
              'rgba(10, 175, 144,.8)',
              'rgba(1, 100, 144,.8)'
            ],
            borderColor: "darkgrey",
            borderWidth: 0,
            fill: true
          }
        ]
      },
      options: {
        elements: {},
        cutoutPercentage: 55,
        legend: {
          display: false
        },
        tooltips:{
          enabled: true
        }
      }
    })
    this.showcaseVal = this.chart.config.data.datasets[0].data[1];
  }
}