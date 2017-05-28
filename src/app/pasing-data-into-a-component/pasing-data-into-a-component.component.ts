import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-pasing-data-into-a-component',
  templateUrl: './pasing-data-into-a-component.component.html',
  styleUrls: ['./pasing-data-into-a-component.component.css']
})
export class PasingDataIntoAComponentComponent implements OnInit {

  @Input() firstName:string; 
  @Input() secondName:string;
  constructor() { }

  ngOnInit() {
  }

}
