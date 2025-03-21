import { Component } from '@angular/core';
import { IWeather } from '../weather-details/weather.model';
import { WeatherService } from '../weather-details/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  showWeatherDetails: boolean = false;

  private defaultLocations: string[] = [
    'chennai',
    'cologne',
    'frankfurt',
    'chicago',
    'new york',
  ];

  weatherData: IWeather[] = [];

  newLocation: string = '';

  
  //default temp displayed in celcius
  isTempShownInCelsius: boolean = true;
  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit(): void {
    this.defaultLocations.forEach((location) => {
      this.getWeather(location);
    });
  }

  getWeather(location: string): void {
    this.weatherService.getCurrentWeatherInfo(location).subscribe((data) => {
      this.weatherData.push(data);
    });
  }

  addNewLocation(newLocation: string): void {
    const weatherDataExists = this.weatherData.find(
      (data) => data.name.toLowerCase() === newLocation.toLowerCase()
    );
    if (newLocation && !weatherDataExists) {
      this.weatherService
        .getCurrentWeatherInfo(newLocation)
        .subscribe((data) => {
          this.weatherData.unshift(data);
        });
    }
  }

  roundWeatherTemp(temperature: number): number {
    return Math.round(temperature);
  }

  deleteWeatherInfo(weather: IWeather) {
    const position = this.weatherData.indexOf(weather);
    if (position !== -1) {
      this.weatherData.splice(position, 1);
    }
  }

  toggleLocationForm(): void {
    this.showWeatherDetails = !this.showWeatherDetails;
  }

  goToWeatherDetails(cityName : string) {
    this.router.navigate(['/weather-details', cityName]);
  }

  toggleTemperatureUnit(): void {
    this.isTempShownInCelsius = true;
  }

  convertToFahrenheit(tempInCelsius : number ) {
    this.isTempShownInCelsius = false;
    return this.roundWeatherTemp((tempInCelsius * 9 / 5) + 32);
  }
}
