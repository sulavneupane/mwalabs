import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  parentCounterValue: number;

  constructor() {
  }

  counterValueChanged(value: number): void {
    this.parentCounterValue = value;
  }

}
