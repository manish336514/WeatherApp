import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-forecast",
  templateUrl: "./forecast.component.html",
  styleUrls: ["./forecast.component.css"]
})
export class ForecastComponent implements OnInit {
  constructor() {}
  forecastForm;
  ngOnInit() {}

  profileForm = new FormGroup({
    forecastcity: new FormControl("")
  });

  onSubmit(f: NgForm) {
    console.log("forcast value input", f.value);
    console.log("NG FORM VALUE", f.value.fiveday); // { first: '', last: '' }
  }

  onSubmit1() {
    console.log("5 Day ForeCast City", this.profileForm.value.forecastcity);
  }
}
