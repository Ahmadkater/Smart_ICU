import { Injectable } from '@angular/core';

import { AngularFireDatabase , AngularFireList, AngularFireObject } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor( private db :AngularFireDatabase) { }
  patient : AngularFireList<any>;
  mode : AngularFireObject<any>;

  getpatient(){
    this.patient = this.db.list('Patient');
    return this.patient.snapshotChanges();
  }

  getmode(){
    this.mode = this.db.object('Mode');
    return this.mode.snapshotChanges();
  }

}
