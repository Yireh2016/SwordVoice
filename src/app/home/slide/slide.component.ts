import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

const TRANSICION=300;
const EXPOSICION=8000;



@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [ 

   trigger('RightArrow', [
    transition(':enter',[
      style({transform:'translateX(30%) scale(1)'}),
      animate('.2s')
    ]),
    transition(':leave',[
      animate('.2s', style({transform:'translateX(30%) scale(0)'}))
    ])
           
  ]),

   trigger('LeftArrow', [
    transition(':enter',[
      style({transform:'translateX(-30%) scale(1)'}),
      animate('.2s' )
    ]),
    transition(':leave',[
      animate('.2s', style({transform:'translateX(-30%) scale(0)'}))
    ])
           
  ]),


   trigger('fade', [
    state('in',  style({opacity:  '1'})),
    state('out', style({ opacity: '0'})),
    transition('out => in',[
      animate(
        '500ms ease',
        )
      ]),
    transition('in => out', [
      animate( '500ms ease' ) 
      ])
    ]),

  ]

})
export class SlideComponent implements OnInit {

  carrusel = ['out', 'out', 'out' , 'out'];
  x=0;
  intervalId;
  mouseOvered='out';
  cancelAnimation=false;


  constructor(public translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.addLangs(["en", "es"]);
    this.carrusel[0]='in';

  }





  ngOnInit() {
    
   // setTimeout(() => this.forward() ,EXPOSICION);

  }



 switch(){
   if (this.x+1 === this.carrusel.length) {
     this.carrusel[this.x]='out';
     setTimeout(()=>this.carrusel[0]='in',TRANSICION);
     this.x=0
   }else{
     this.carrusel[this.x]='out';
     setTimeout(()=>{
       this.carrusel[this.x+1]='in';
       this.x=this.x+1
     },TRANSICION);
   }
 }

  selectSlide( x: number){
    this.carrusel = ['out', 'out', 'out' , 'out'];
    this.carrusel[x]='in';
    clearInterval(this.intervalId);
  }

  detectPointer(){
    if(this.cancelAnimation===false) {this.mouseOvered='out';}
  }

 back(){


  // this.intervalId= this.intervalId ? clearInterval(this.intervalId) : setInterval(()=>this.switch(),EXPOSICION);

  
  // clearInterval(this.intervalId); // this.intervalId=setInterval(()=>this.switch(),EXPOSICION);    


   this.carrusel = ['out', 'out', 'out' , 'out'];
   if (this.x-1 < 0) {
     this.carrusel[this.carrusel.length-1] ='in';
     this.x=this.carrusel.length-1;
   }else{
     this.carrusel[this.x-1] ='in';
     this.x=this.x-1;
   }
   

 }

 forward(){
   this.intervalId= this.intervalId ? clearInterval(this.intervalId) : setInterval(()=>this.switch(),EXPOSICION) ;


   this.carrusel = ['out', 'out', 'out' , 'out'];
   if (this.x+1 === this.carrusel.length ) {
     this.carrusel[0] ='in';
     this.x=0;
   }else{
     this.carrusel[this.x+1] ='in';
     this.x=this.x+1;
   }
 }

}
