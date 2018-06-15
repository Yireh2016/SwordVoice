import { Component, OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';
import { NavbarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
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
export class AboutComponent implements OnInit {

titleIn;
  constructor() { }

  ngOnInit() {
  }

    showAbout(x:string){
    this.titleIn=x;
  }

}
