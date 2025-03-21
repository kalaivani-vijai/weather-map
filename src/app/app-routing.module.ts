import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component'; 

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'weather-details/:location', component: WeatherDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
