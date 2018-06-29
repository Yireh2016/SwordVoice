import { Component, DoCheck , ViewChild , ElementRef , OnInit } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition , keyframes } from '@angular/animations';

declare var SVG: any;

const ANIM_DURATION=1000;//debe ser mayor a 500ms
const COLOR_CIRCULO='#f1f1f1';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations: [

  ///////////////////Animacion al regresar del menu////////
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
//////////////////////////////////////////////////////////



/////////////Animacion Web Design/////////////////////////

    trigger('flyBottom',[
      state('on', style({transform:'translateY(0)'})),
      transition('off => on',[


        animate('2000ms ease-in', 
         keyframes([
           style({transform:'translateY(100%)',offset:0}),
           style({transform:'translateY(0)',offset:1}) 

           ]))//style({transform:'translateY(100%)'})
      ]),
     state('off', style({transform:'translateY(100%)'})),
      transition('on => off',[
        animate('2000ms ease-out', 
          keyframes([
           style({transform:'translateY(0)',offset:0}),
           style({transform:'translateY(100%)',offset:1}) 

           ]))
      ]),

    ]),

    /////////////Animacion Web Deveolpment /////////////////////////


     trigger('flyLeft',[
      state('on', style({transform:'translateX(0)'})),
      transition('off => on',[


        animate('2000ms ease-in', 
         keyframes([
           style({transform:'translateX(-100%)',offset:0}),
           style({transform:'translateX(0)',offset:1}) 

           ])
         )//style({transform:'translateY(100%)'})
      ]),
     state('off', style({transform:'translateX(-100%)'})),
      transition('on => off',[
        animate('2000ms ease-out', 
          keyframes([
           style({transform:'translateX(0)',offset:0}),
           style({transform:'translateX(-100%)',offset:1}) 

           ])
        )
      ])
    ]),
    /////////////Animacion Web Marketing /////////////////////////

     trigger('flyRight',[
      state('on', style({transform:'translateX(0)'})),
      transition('off => on',[


        animate('2000ms ease-in', 
         keyframes([
           style({transform:'translateX(100%)',offset:0}),
           style({transform:'translateX(80%)',offset:0.2}),
           style({transform:'translateX(60%)',offset:0.4}),
           style({transform:'translateX(40%)',offset:0.6}),
           style({transform:'translateX(20%)',offset:0.8}), 
           style({transform:'translateX(0)',offset:1}) 

           ]))//style({transform:'translateX(100%)'})
      ]),
     state('off', style({transform:'translateX(100%)'})),
      transition('on => off',[
        animate('2000ms ease-out', 
          keyframes([
           style({transform:'translateX(0)',offset:0}),
           style({transform:'translateX(100%)',offset:1}) 

           ]))
      ]),
     ])
	]
})
export class ServicesComponent implements DoCheck, OnInit {
titleIn;
offset;



@ViewChild('selector') selector : ElementRef;
@ViewChild('contenedorSelector') contenedorSelector : ElementRef;
@ViewChild('webTituloDesign') webTituloDesign : ElementRef;
@ViewChild('webTituloDev') webTituloDev : ElementRef;
@ViewChild('webTituloMarket') webTituloMarket : ElementRef;

  constructor() {

   }
webTituloDesignLeft;
webTituloMarketTop;
    ngDoCheck  () {

      //codigo posicionar los titulos de los servicios en la version mobile 
    this.webTituloDesignLeft= (this.contenedorSelector.nativeElement.offsetWidth/2 - (this.webTituloDesign.nativeElement.offsetWidth/2)) + "px";//Ya que no permite hacer dos transformaciones simultaneas,

    this.webTituloMarketTop=(this.contenedorSelector.nativeElement.offsetHeight*60/100 - (this.webTituloMarket.nativeElement.offsetWidth/2)) + "px";


  }

@ViewChild('animado') animado : ElementRef;
@ViewChild('develSection') develSection : ElementRef;

  ngOnInit(){

  }


// SELECTOR DRAGGUEABLE
  aparecer=false; //variable para aparecer y desaparecer fondo osscuro e instrucciones
  manitaView="block";
  dragStart(e){
    // Se almacena la posicion inicial del selector
    let selector=this.selector.nativeElement;
    
    this.offset=this.contenedorSelector.nativeElement.offsetTop;
    this.selectorOn=true;//se activa el selector

    setTimeout(() => { // este timer ayuda a que el selector no se active al toque sino si lo presionas por 300ms
      if (this.selectorOn) {
        this.manitaView="none";
        this.dragStill(e);
      }
    },300);
  }

  selectorTransition; //String para activar y desactivar animacion del selector al soltarlo luego de dragguear
  selectorOn=false;// activador del selector
  webTituloDesignScale;
  webTituloDevScale;
  webTituloMarketScale;

  dragStill(e){
    this.desicion=null;//si no se escoge nada no hay desicion
    this.aparecer=true;// se activa el fondo oscuro y se desaparecen las instrucciones
    e.preventDefault();//elimina el efecto de scroll mientras esta en modo drag
    let touch = e.targetTouches[0];
    this.selectorTransition="all 0s ease";//se deshablita la transicion durante el dragging
    this.selectorX=touch.pageX  + 'px';//se cambia las coordenadas de acuerdo a las coordenadas del touch
    this.selectorY=touch.pageY - this.offset + 'px';//se resta el ancho del header en la coordenada vertical
 
     //Seleccionando Development
  
    if (touch.pageX  < this.webTituloDev.nativeElement.offsetLeft + (this.webTituloDev.nativeElement.offsetWidth*3/4) 
        && touch.pageY  > this.webTituloDesign.nativeElement.offsetTop + this.offset
      ) {
      this.webTituloDevScale="scale(1.5)";
      this.desicion="Dev";

    }else {
      this.webTituloDevScale="scale(1)";
    }





    if (touch.pageY  <= this.webTituloDesign.nativeElement.offsetTop + this.offset + 50
      &&
      touch.pageX  > this.webTituloDev.nativeElement.offsetLeft + (this.webTituloDev.nativeElement.offsetWidth*3/4)
      &&
      touch.pageX  < this.webTituloMarket.nativeElement.offsetLeft + (this.webTituloMarket.nativeElement.offsetWidth*1/4)
      ) {
      this.webTituloDesignScale="scale(1.5)";
      this.desicion="Des";


    }else{
      this.webTituloDesignScale="scale(1)";

    }

    //Seleccionando Internet Marketing

      if (touch.pageX  > this.webTituloMarket.nativeElement.offsetLeft + (this.webTituloMarket.nativeElement.offsetWidth*1/4)
      &&
       touch.pageY  > this.webTituloDesign.nativeElement.offsetTop + this.offset
      ) {
      this.webTituloMarketScale="scale(1.5)";
      this.desicion="Mark";
    }else{
      this.webTituloMarketScale="scale(1)";

    }


  }

  selectorX; //posicion fija del selector en el eje X
  selectorY; //posicion fija del selector en el eje Y
  desicion;
  dragEnd(e){

    this.selectorOn=false; //al finalizar el dragging
    this.aparecer=false;//   deshabilita el selector y aparecen insrucciones y fondo
    this.selectorTransition="all .5s ease";// se reestablece transcion para que el selector regrese a su lugar 
                                           // de una forma suave
    this.selectorX="50%"; //el selector draggueable regresa a su lugar
    this.selectorY="50%";
    
    if (this.desicion) {
      this.doDesicion(this.desicion);
      this.desicion=null;  
      return;    
    }
    this.manitaView="block";

  }

////////////////////////////////////////////////////
//FIN DE SELECTOR DRAGGUEABLE


flyfromBottom= 'off';
flyfromLeft= 'off';
flyfromRight= 'off';
doDesicion(d){
  
  switch (d) {
    case "Des":
     setTimeout(()=> {
       this.designComponent=true;//luego de la duracion revealDuration de la animacion aparece el componente
       },ANIM_DURATION);
      break;
    case "Dev":
     setTimeout(()=> {
       this.develComponent=true;//luego de la duracion revealDuration de la animacion aparece el componente
       },ANIM_DURATION);
      break;
    case "Mark":
     setTimeout(()=> {
       this.marketComponent=true;//luego de la duracion revealDuration de la animacion aparece el componente
       },ANIM_DURATION);
      break;
    default:

        this.develComponent=false;
        this.designComponent=false;
        this.marketComponent=false;
      break;
  }
      this.reveal('botonSwipe');

}

back(){
  this.flyfromBottom= 'off';
  this.flyfromLeft= 'off';
  this.flyfromRight= 'off';
  this.manitaView="block";

}

  showServices(x:string){//efecto de aparecer luego de regresar del menu
  	this.titleIn=x;
  }
/*##################################*/
/*##################################*/
/*##################################*/
/*# Este Codigo es para revelar el #*/
/*#    servicio web development    #*/
/*##################################*/
/*##################################*/
/*##################################*/
  @ViewChild('botonDevel') botonDevel: ElementRef;
  @ViewChild('botonDes') botonDes: ElementRef;
  @ViewChild('botonMark') botonMark: ElementRef;


  centerY;
  centerX;
  revealDuration=ANIM_DURATION/1000 +'s';//se coloca la duracion de la animacion
  develComponent=false;
  designComponent=false;
  marketComponent=false;


  contCircle;//contenedor SVG svg.js lib
  circulo;

  colorCircle=COLOR_CIRCULO;


  reveal(boton){//al dar click al boton se ejecuta animacion
    let botonPos ;
    let component;
    switch (boton) {
      case "botonDevel":
        botonPos = this.botonDevel.nativeElement.getBoundingClientRect();
        setTimeout(()=> {
         this.develComponent=true;//luego de la duracion revealDuration de la animacion aparece el componente
         },ANIM_DURATION);
        break;
      case "botonDes":
         botonPos = this.botonDes.nativeElement.getBoundingClientRect();
         setTimeout(()=> {
         this.designComponent=true;//luego de la duracion revealDuration de la animacion aparece el componente
         },ANIM_DURATION);
        break;
      case "botonMark":
         botonPos = this.botonMark.nativeElement.getBoundingClientRect();
           setTimeout(()=> {
           this.marketComponent=true;//luego de la duracion revealDuration de la animacion aparece el componente
           },ANIM_DURATION);
        break;
      case "botonSwipe":
         botonPos = this.selector.nativeElement.getBoundingClientRect();
   
        break;

      
      default:
        // code...
        break;
    }

  
     //se coloca el centro del circulo a aparecer en el centro del boton
     this.centerY = botonPos.top + botonPos.height/2;
     this.centerX = botonPos.left + botonPos.width/2;


    //controlando Animaciones

    this.contCircle = SVG('develSection').size('100%','100%');
    this.contCircle.style({
      position: 'fixed',
      top: 0,
      left: 0,
      'z-index':40
    });
    this.circulo = this.contCircle.circle(0).attr({fill:'#f1f1f1'});
    this.circulo.center(this.centerX,this.centerY);
    let radius = Math.pow(window.innerHeight,2) + Math.pow(window.innerWidth,2);
    this.circulo.animate(ANIM_DURATION).radius(Math.sqrt(radius));
    
  }

  unreveal(e){//evento se dispara al terminar el componente
    this.circulo.animate(ANIM_DURATION).radius(0);
    setTimeout(()=>{
      this.develComponent=false;//despues de la animacion para termnar debe cerrar el componente
      this.designComponent=false;
      this.marketComponent=false;
      this.contCircle.remove();
    },ANIM_DURATION + 500);
  }




}///Fin de componente
