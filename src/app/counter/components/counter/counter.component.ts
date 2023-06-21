import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <hr/>
  <h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetCounter()">reset</button>
  <button (click)="decreaseBy(1)">-1</button>
  `
})

export class CounterComponent{
  constructor() { }

  public counter: number = 0;

  increaseBy ( value: number = 1 ):void {
    this.counter += value
  }
  decreaseBy (value: number = 1):void {
    this.counter -= value
  }
  resetCounter ():void {
    this.counter = 0
  }
}
