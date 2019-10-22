import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlotComponent } from './plot/plot.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"monitor" , component:PlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
