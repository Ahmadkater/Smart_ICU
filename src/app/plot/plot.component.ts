import { Component, OnInit } from '@angular/core';
import { ManageService } from '../service/manage.service';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {
  
  constructor(private manageservice: ManageService) { }

  patient_data = [];
  bluetooth_mode : string ;
  ECG : number;
  HR : number;
  ID : number;
  TEMP : number;

  ngOnInit() {
    this.get_communication_mode();
    this.get_patient_data();

  }

  get_communication_mode(){
    this.manageservice.getmode().subscribe(
      item => {
        console.log(item);
        this.bluetooth_mode = item.payload.val();
      }
    );
  }

  get_patient_data(){
    this.manageservice.getpatient().subscribe(
      list => {
        console.log(list);
        this.ECG = list[0].payload.val();
        this.HR = list[1].payload.val();
        this.ID = list[2].payload.val();
        this.TEMP = list[3].payload.val();
        });
  }

  plot(){

  }
}
