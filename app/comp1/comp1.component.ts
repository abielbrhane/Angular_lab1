import {Component,Output,EventEmitter} from '@angular/core';

@Component({
    selector: 'app-comp1',
    template:  `
    <div>
      <button (click)="decCounterMethod()" (click)="emitMessage()">-</button>
      <span>{{counterValue}}</span>
      <button (click)='incCounterMethod()' (click)="emitMessage()">+</button>
    </div>
    <div>
        Incert default value:<input (input)='setCounter($event)'/>
    </div>
    
    `
})

export class CounterComponent{
   public counterValue;

    constructor(){
        this.counterValue=0;
    }

    incCounterMethod(){
      this.counterValue++;
      return false;
    }
    decCounterMethod(){
        this.counterValue--;
        return false;
    }

    setCounter(eve){
        this.counterValue=eve.target.value;
    }

    @Output() messageEmitter = new EventEmitter();

    emitMessage() {
      this.messageEmitter.emit(this.counterValue);
}
}