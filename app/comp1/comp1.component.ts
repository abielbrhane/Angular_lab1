import {Component,Output,EventEmitter, Input} from '@angular/core';

@Component({
    selector: 'app-comp1',
    template:  `
    <div>
      <button (click)="decCounterMethod()" (click)="emitMessage()">-</button>
      <span>{{counterValue}}</span>
      <button (click)='incCounterMethod()' (click)="emitMessage()">+</button>
    </div>    
    `
})

export class CounterComponent{

   @Input() counterValue:number;
    

    incCounterMethod(){
      this.counterValue++;
      return false;
    }
    decCounterMethod(){
        this.counterValue--;
        return false;
    }

    @Output() messageEmitter = new EventEmitter();

    emitMessage() {
      this.messageEmitter.emit(this.counterValue);
}
}