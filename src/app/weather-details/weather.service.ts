import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IWeather } from './weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getCurrentWeatherInfo(location: string): Observable<IWeather> {
    return this.http.get<IWeather>(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=`
    );
  }

  getWeatherForecast(location: string): Observable<any> {
    return this.http.get<any>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=`
    );
  }
}