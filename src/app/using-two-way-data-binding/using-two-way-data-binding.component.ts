import { Component,  OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-using-two-way-data-binding',
  templateUrl: './using-two-way-data-binding.component.html',
  styleUrls: ['./using-two-way-data-binding.component.css']
})
export class UsingTwoWayDataBindingComponent implements OnInit {

  constructor() { }
  @Input() count:number;
  @Output() countChange = new EventEmitter<number>();
  ngOnInit() {
  }

  increment(){
    this.count++;
    this.countChange.emit(this.count)
  } 

}
