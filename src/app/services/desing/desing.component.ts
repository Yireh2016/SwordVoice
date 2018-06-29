import {  trigger,  state,  style,  animate,  transition , keyframes } from '@angular/animations';
import { Component, OnInit , Input , Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-desing',
  templateUrl: './desing.component.html',
  styleUrls: ['./desing.component.css'],
  animations: [

  ///////////////////Animacion al regresar del menu////////
   trigger('fade', [
    state('in', style({opacity: '1',display: 'block'})),
    state('out', style({ opacity: '0'})),
    transition('* => in', [
      animate(
        '500ms ease-in', keyframes([
                	style({opacity:"0",offset:0}),
                	style({opacity:"1",offset:1}),
                ])
        )
      ]),
    transition('* => out', [
      animate(
        '500ms ease-in', keyframes([
                	style({opacity:"1",offset:0}),
                	style({opacity:"0",offset:1}),
                ])
        ) 
      ])
    ])]
})
export class DesingComponent implements OnInit {


@Output()
  finishMe2: EventEmitter<boolean> = new EventEmitter<boolean>();

  finish() {
    this.finishMe2.emit(false);
  }


start;


  constructor() { }

  ngOnInit() {

    this.start='in';
    //setTimeout(() => this.start='in',1000);
  }
  unReveal(){
    this.start='out';//se coloca transparente el componente
    setTimeout(this.finish(),800);//800ms despues se indica que se debe cerrar el circulo
  }
}