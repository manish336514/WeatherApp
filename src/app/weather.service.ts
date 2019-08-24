import { Injectable } from "@angular/core";
import { CurrentWeather } from "./current-weather";

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
  constructor() {}

  weatherNow() {
    return this.current;
  }
}
