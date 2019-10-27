import { Injectable } from '@angular/core';

import { AngularFireDatabase , AngularFireList, AngularFireObject } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class ManageService {

  constructor( private db :AngularFireDatabase) { }
  id : AngularFireObject<any>;
  temp : AngularFireObject<any>;
  ecg : AngularFireObject<any>;
  hr : AngularFireObject<any>;
  mode : AngularFireObject<any>;

  get_id(){
    this.id = this.db.object('ID');
    return this.id.snapshotChanges();
  }
  get_ecg(){
    this.ecg = this.db.object('ECG');
    return this.ecg.snapshotChanges();
  }
  get_temp(){
    this.temp = this.db.object('TEMP');
    return this.temp.snapshotChanges();
  }

  get_hr(){
    this.hr = this.db.object('HR');
    return this.hr.snapshotChanges();
  }

  get_mode(){
    this.mode = this.db.object('MODE');
    return this.mode.snapshotChanges();
  }

  put_comment(new_comment){
    this.db.object('/').update({Comment:new_comment});
  }

}
