import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { CurrentWeather } from "../current-weather";
import "rxjs/Rx";
// import { subscribe } from "rxjs/operators";

// import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"],
  providers: [WeatherService]
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather;
  location;
  constructor(private ws: WeatherService) {}

  ngOnInit() {
    // this.myWeather = this.ws.weatherNow();

    navigator.geolocation.getCurrentPosition(pos => {
      this.location = pos.coords;
      console.log("pos", pos);
    });

    this.ws.localweather("12.97", "77.59").subscribe(data => {
      console.log("data", data);
      this.myWeather = new CurrentWeather(
        data.name,
        data.main.temp,
        data.weather[0].icon,
        data.weather[0].description,
        data.main.temp_max,
        data.main.temp_min
      );
    });
  }
}
