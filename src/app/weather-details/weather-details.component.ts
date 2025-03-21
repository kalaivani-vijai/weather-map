import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import { IWeather } from './weather.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css'],
})
export class WeatherDetailsComponent {
  cityName: string = '';
  currentWeather!: IWeather;
  weatherForecast: any;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.cityName = params.get('location')!;
      this.getWeatherDetails();
    });
  }

  getWeatherDetails(): void {
    this.weatherService.getCurrentWeatherInfo(this.cityName).subscribe((data) => {
      this.currentWeather = data;
    });

    this.weatherService.getWeatherForecast(this.cityName).subscribe((data) => {
      this.weatherForecast=data.list;
    });
  }

  roundWeatherTemp(temperature: number): number {
    return Math.round(temperature);
  }

}