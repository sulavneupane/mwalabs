import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'counter-component',
  template: `
    <div>
      <input type="number" (input)="setCounterValue($event)" value="{{counterValue}}"/>
      <button (click)="decrementCounter()">-</button>
      <span>{{counterValue}}</span>
      <button (click)="incrementCounter()">+</button>
    </div>
  `,
  styles: [`
    div {
      border: 1px solid green;
      margin: 5px;
      padding: 5px;
    }

  `],
  outputs: ['OnCounterChange']
})
export class CounterComponent implements OnInit {

  private counterValue: number;
  OnCounterChange: EventEmitter<number>;

  constructor() {
    this.counterValue = 0;
    this.OnCounterChange = new EventEmitter();
  }

  incrementCounter(): boolean {
    this.counterValue = this.counterValue + 1;
    this.emitCounterValue();
    return false;
  }

  decrementCounter(): boolean {
    this.counterValue = this.counterValue - 1;
    this.emitCounterValue();
    return false;
  }

  setCounterValue(evt): void {
    let value: number = parseInt(evt.target.value);
    if (value) {
      this.counterValue = value;
      this.emitCounterValue();
    }
  }

  emitCounterValue() {
    this.OnCounterChange.emit(this.counterValue);
  }

  ngOnInit() {
  }

}
