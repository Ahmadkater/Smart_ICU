import { Component, OnInit } from '@angular/core';
import { ManageService } from '../service/manage.service';
import { Chart } from "chart.js";


@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  constructor(private manageservice: ManageService) { }
  
  bluetooth_mode: string;
  ECG: number;
  HR: number;
  ID: number;
  TEMP: number;

  comment:string;

  count=0;
  myChart = null;

  ngOnInit() {
    this.get_communication_mode();
    this.get_patient_data();
  }

  send_comment(){
    console.log(this.comment);
    this.manageservice.put_comment(this.comment);
    this.comment = null
  }


  get_communication_mode() {
    this.manageservice.get_mode().subscribe(
      item => {
        console.log(item);
        this.bluetooth_mode = item.payload.val();
      }
    );
  }

  get_patient_data() {
    this.manageservice.get_id().subscribe(item => {this.ID = item.payload.val();});
    this.manageservice.get_hr().subscribe(item => {this.HR = item.payload.val();});
    this.manageservice.get_temp().subscribe(item => {this.TEMP = item.payload.val();});
    this.manageservice.get_ecg().subscribe(item => {console.log(item);this.ECG = item.payload.val();this.plot();this.count++;});
  }

  plot()
  {
    if (this.myChart)
    {
      this.addData(this.myChart, this.count, this.ECG);
    }
    else {
      this.myChart = new Chart('myChart', {
        type: 'line',
        data: {
          labels: [this.count],
          datasets: [{
            label: 'ECG',
            //data: this.points,
            backgroundColor: "blue",
            borderColor: "blue",
            borderWidth: 1,
            fill: false
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }],
          }
        }
      })
      console.log(this.myChart);
    }
  }

  addData(chart, label, data)
  {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data);
    chart.update();
  }

}

