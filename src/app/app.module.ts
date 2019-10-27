import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { ManageService } from "../app/service/manage.service";
import { environment } from "../environments/environment";
import { PlotComponent } from './plot/plot.component';

import { ChartsModule } from "ng2-charts";
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavigbarComponent } from './navigbar/navigbar.component'

@NgModule({
  declarations: [
    AppComponent,
    PlotComponent,
    HomeComponent,
    NavigbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ChartsModule,
    FormsModule
  ],
  providers: [ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
