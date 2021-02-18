import { Component, ElementRef,  ViewChild } from '@angular/core';
import * as data from './data.json';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  @ViewChild('test', {static: false}) testElem: ElementRef

  ngOnit(){}

  ngAfterViewInit(){
    this.testElem.nativeElement.innerHTML = data;
  }
}
