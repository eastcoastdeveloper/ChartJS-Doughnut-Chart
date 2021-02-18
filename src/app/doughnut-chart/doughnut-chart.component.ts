import { Component, ElementRef,  Input,  OnInit, ViewChild } from '@angular/core';
import { ChartType, Chart } from 'chart.js';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})

export class DoughnutChartComponent {

  chart:any;
  @ViewChild('dChart', {static:false}) dChart:ElementRef;
  @Input() jsonArray:any;
  @Input() cutOut:number = 75;
  @Input() backgroundColors: any = ['rgb(100,100,100)', 'rgb(130,130,130)', 'rgb(160,160,160)', 'rgb(190,190,190)', 'rgb(220,220,220)']

  ngAfterViewInit() {
    let cvs:any;
        cvs = this.dChart.nativeElement;
    this.dChart = new Chart(cvs, {
      type: 'doughnut',
      data: {
        labels: ["label 1", "label 2", "label 3", "label 4", "label 5"],
        datasets: [{
          data: this.jsonArray,
          backgroundColor: this.backgroundColors,
          fill: false,
          borderWidth: 0
        }]
      },
      options: {
        responsive: false,
        legend: {
          display: true,
        },
        cutoutPercentage: this.cutOut,
        tooltips: {
          enabled: false
        },
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }
      }
    })
    console.log(this.chart)
  }
}