import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-responding-to-componen-event',
  templateUrl: './responding-to-componen-event.component.html',
  styleUrls: ['./responding-to-componen-event.component.css']
})
export class RespondingToComponenEventComponent implements OnInit {

  @Input()  inputCount:number;
  @Output() result = new EventEmitter<number>();

  count:number = 1;
  increment(){
   this.count++;
  }

  customIncrement(){
    this.inputCount++;
    this.result.emit(this.inputCount)
  }

  constructor() { }

  ngOnInit() {

  }

}
