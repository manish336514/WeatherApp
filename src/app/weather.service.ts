import { Injectable } from "@angular/core";
import { CurrentWeather } from "./current-weather";
// import { Http, Response } from "@angular/http";
import { Http, Response } from "@angular/http";
// import "rxjs/Rx";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  current: CurrentWeather = new CurrentWeather(
    "New york",
    "80",
    "https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg",
    "sunny",
    "96",
    "72"
  );
  constructor(private http: Http) {}

  weatherNow() {
    return this.current;
  }

  localweather(lat: string, lon: string) {
    return this.http
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f70c6203679428cb08cedfa74779b13d`
      )
      .map((response: Response) => response.json());
  }
}
// https://api.openweathermap.org/data/2.5/weather?lat=12.97&lon=77.59&appid=f70c6203679428cb08cedfa74779b13d
//
