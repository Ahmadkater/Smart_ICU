import { Component, OnInit } from '@angular/core';
import {PlotComponent} from "../plot.component";
import {Chart} from "chart.js";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  myChart = [];
  points = [1,2,3,4,5,19,7]
  constructor(private _PlotComponent : PlotComponent) { }

  ngOnInit() {
    this.plot();
  }

  plot(){
    this.myChart = new Chart('myChart', {
      type: 'line',
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      data: {
          datasets: [{
              label: 'HR',
              data: [1,2,3,4,5,19,7,8,9],
              borderColor:"blue"
          }]
      },
      options: {
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    unit: 'second'
                }
            }],
            yAxes:[{
              ticks:{
                beginAtzero:true
              }
            }]
        }
    }
  });
  }

}
