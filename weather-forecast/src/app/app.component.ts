import { Component } from '@angular/core';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { WeatherForecast } from 'src/models/weather-forecast';
import { HttpResponseBase, HttpErrorResponse } from '@angular/common/http';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Weather Forecast';
  weatherInfo: WeatherForecast = {} as WeatherForecast;
  cities: string[] = ['Charlotte, NC', 'Atlanta, GA', 'Springfiled, IL', 'Nashville, TN'];
  selectedCity = '';

  public constructor(public weatherForecastService: WeatherForecastService) { }

  getWeatherForecastByCity(city: string) {
    this.selectedCity = city;
    this.weatherForecastService.getWeatherForecastByCity(city).subscribe((data) => {
      this.weatherInfo = data;
      this.weatherInfo.data.forEach(d => {
        d.day = moment(d.datetime).format('dddd');
        d.date = moment(d.datetime).format("MMM Do");
        d.weather.icon = `../assets/images/${d.weather.icon}.png`;
      });
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }
}
