import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  outputData='';

  counter:number=5;

  showOutputData(data){
    this.outputData = data;
  }
}
