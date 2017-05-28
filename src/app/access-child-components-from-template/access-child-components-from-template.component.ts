import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access-child-components-from-template',
  templateUrl: './access-child-components-from-template.component.html',
  styleUrls: ['./access-child-components-from-template.component.css']
})
export class AccessChildComponentsFromTemplateComponent implements OnInit {
  name:string = "John Wick";
  moreName:string = "John Nowick";
  constructor() { }

  ngOnInit() {
  
  }

}
