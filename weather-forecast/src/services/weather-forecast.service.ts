import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WeatherForecast } from 'src/models/weather-forecast';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {
  private weatherForecastApi = 'https://api.weatherbit.io/v2.0/forecast/daily';

  constructor(private http: HttpClient) { }

  getWeatherForecastByCity(city: string) {

    const httpOptions = {
      params: new HttpParams().set('key', environment.apiKey).set('city', city).set('days', '5')
    };

    return this.http.get<WeatherForecast>(this.weatherForecastApi, httpOptions);
  }
}
