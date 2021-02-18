import { Component, ElementRef, ViewChild } from "@angular/core";
import * as data from "./data.json";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  arrOne: any = [30, 20, 10, 20, 20];
  arrTwo: any = [10, 20, 30, 0, 40];
  arrThree: any = [50, 20, 10, 10, 10];

  ngOnit() {}
}
