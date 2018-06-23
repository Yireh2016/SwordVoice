import { Component, DoCheck , ViewChild , ElementRef } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition , keyframes } from '@angular/animations';


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
           style({transform:'translateY(80%)',offset:0.2}),
           style({transform:'translateY(60%)',offset:0.4}),
           style({transform:'translateY(40%)',offset:0.6}),
           style({transform:'translateY(20%)',offset:0.8}), 
           style({transform:'translateY(0)',offset:1}) 

           ]))//style({transform:'translateY(100%)'})
      ]),
     state('off', style({transform:'translateY(100%)'})),
      transition('on => off',[
        animate('2000ms ease-out', 
          keyframes([
           style({transform:'translateY(0)',offset:0}),
           style({transform:'translateY(20%)',offset:0.2}),
           style({transform:'translateY(40%)',offset:0.4}),
           style({transform:'translateY(60%)',offset:0.6}),
           style({transform:'translateY(80%)',offset:0.8}), 
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
           style({transform:'translateX(-80%)',offset:0.2}),
           style({transform:'translateX(-60%)',offset:0.4}),
           style({transform:'translateX(-40%)',offset:0.6}),
           style({transform:'translateX(-20%)',offset:0.8}), 
           style({transform:'translateX(0)',offset:1}) 

           ])
         )//style({transform:'translateY(100%)'})
      ]),
     state('off', style({transform:'translateX(-100%)'})),
      transition('on => off',[
        animate('2000ms ease-out', 
          keyframes([
           style({transform:'translateX(0)',offset:0}),
           style({transform:'translateX(-20%)',offset:0.2}),
           style({transform:'translateX(-40%)',offset:0.4}),
           style({transform:'translateX(-60%)',offset:0.6}),
           style({transform:'translateX(-80%)',offset:0.8}), 
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
           style({transform:'translateX(20%)',offset:0.2}),
           style({transform:'translateX(40%)',offset:0.4}),
           style({transform:'translateX(60%)',offset:0.6}),
           style({transform:'translateX(80%)',offset:0.8}), 
           style({transform:'translateX(100%)',offset:1}) 

           ]))
      ]),
     ])
	]
})
export class ServicesComponent implements DoCheck {
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
    this.webTituloDesignLeft= (this.contenedorSelector.nativeElement.offsetWidth/2 - (this.webTituloDesign.nativeElement.offsetWidth/2)) + "px";//Ya que no permite hacer dos transformaciones simultaneas,

    this.webTituloMarketTop=(this.contenedorSelector.nativeElement.offsetHeight*60/100 - (this.webTituloMarket.nativeElement.offsetWidth/2)) + "px";


  }


// SELECTOR DRAGGUEABLE
  aparecer=false; //variable para aparecer y desaparecer fondo osscuro e instrucciones
  manitaView="block";
  dragStart(e){
    // Se almacena la posicion inicial del selector
    let selector=this.selector.nativeElement;
    
    this.offset=this.contenedorSelector.nativeElement.offsetTop;
    this.selectorOn=true;//se activa el selector

    setTimeout(() => { // este timer ayuda a que el selector no se active al toque sino si lo presionas por 500ms
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
    //Seleccionando Desing
/*console.log("\n");
console.log("\n");
console.log("\n");
    console.log("Selector Y " + touch.pageY);
    console.log("Selector X " + touch.pageX);
    
    console.log("Desing.offsetTop " + this.webTituloDesign.nativeElement.offsetTop );

    console.log("offset " + this.offset );

    console.log("Development.offsetLeft " + this.webTituloDev.nativeElement.offsetLeft );

    console.log("Development.offsetWidth/2 " + this.webTituloDev.nativeElement.offsetWidth/2);
    console.log(" Market.offsetLeft " + this.webTituloMarket.nativeElement.offsetLeft);
    console.log("Market.offsetWidth/2 " + this.webTituloMarket.nativeElement.offsetWidth/2);

*/
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





    if (touch.pageY  <= this.webTituloDesign.nativeElement.offsetTop + this.offset + 22
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
    
    console.log("desicion " + this.desicion);
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
      this.flyfromBottom="on";
      break;
    case "Dev":
      this.flyfromLeft="on";
      // code...
      break;
    case "Mark":
      this.flyfromRight="on"
      break;

    default:
      this.flyfromBottom= 'off';
      this.flyfromLeft= 'off';
      this.flyfromRight= 'off';
      break;
  }
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
}
