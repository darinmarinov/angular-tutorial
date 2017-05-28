import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle-directive',
  templateUrl: './ngstyle-directive.component.html',
  styleUrls: ['./ngstyle-directive.component.css']
})
export class NgstyleDirectiveComponent implements OnInit {
  public px:string='px'
  public font_size="12" + this.px;
  public background_color="grey ";
 
  public getRandomBorder (){
     let letters:any = '0123456789ABCDEF'.split('');
     let colors:string = '#';
     for(let i=0;i<6;i++){
       colors += letters[Math.floor(Math.random()*16)]
     }
     return colors
  }

  randomBorderColor:any = this.getRandomBorder;


  fivePix:string = '5px'
  paraStyles = {
    'padding': '10px 30px',
    'color':'red',
    'fontWeight': 'bold',
    'border': this.fivePix + ' solid '+ this.randomBorderColor(),
    'borderRadius': this.fivePix
  }
  

  constructor() { }
  ngOnInit() {
      console.log(this.randomBorderColor()); 
  }

}
