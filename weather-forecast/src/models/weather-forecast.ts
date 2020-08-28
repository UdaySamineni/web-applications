
export interface WeatherForecast {
  city_name: string;
  data: Data[];
}

export interface Data {
  day: string;
  date: string;
  datetime: Date;
  temp: number;
  weather: Weather;
}

export interface Weather {
  icon: string;
  code: number;
  description: string;
}
