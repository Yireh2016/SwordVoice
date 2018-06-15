import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
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
export class ContactComponent implements OnInit {

  titleIn:string;
  constructor() { }

  ngOnInit() {
  }

  showContact(x:string){
    this.titleIn=x;
  

  }
}
