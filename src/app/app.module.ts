import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { ManageService } from "../app/service/manage.service";
import { environment } from "../environments/environment";
import { PlotComponent } from './plot/plot.component';
import { HomeComponent } from './home/home.component';

import { ChartsModule } from "ng2-charts";


@NgModule({
  declarations: [
    AppComponent,
    PlotComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    ChartsModule,
  ],
  providers: [ManageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
