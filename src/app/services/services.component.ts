import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [
   trigger('fade', [
    state('in', style({opacity: '1',display: 'block'})),
    state('out', style({ opacity: '0'})),
      transition('out => in', [
        animate(
          '500ms ease-in',
          )
        ]),
      transition('in => out', [
        animate( '10ms ease-out' ) 
        ])
    ]),
	]
})
export class ServicesComponent implements OnInit {
titleIn;
  constructor() { }

  ngOnInit() {
  }

  showServices(x:string){
  	this.titleIn=x;
  }
}
