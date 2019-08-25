import { Component, OnInit } from "@angular/core";
import { WeatherService } from "../weather.service";
import { CurrentWeather } from "../current-weather";
import "rxjs/Rx";
// import { subscribe } from "rxjs/operators";

// import "rxjs/add/operator/subscribe";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-current",
  templateUrl: "./current.component.html",
  styleUrls: ["./current.component.css"],
  providers: [WeatherService]
})
export class CurrentComponent implements OnInit {
  myWeather: CurrentWeather;
  constructor(private ws: WeatherService) {}

  ngOnInit() {
    //  this.myWeather = this.ws.weatherNow();

    this.ws.localweather("12.97", "77.59").subscribe(data => {
      console.log(data);
    });
  }
}
