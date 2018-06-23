import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-barx',
  templateUrl: './barx.component.html',
  styleUrls: ['./barx.component.css']
  
})
export class BarxComponent {
  @Input() unable:boolean;
   constructor() { }



  toogleAnim=true;

  click(){/*alterna las animaciones a barra o a equis*/
    if (this.unable === true) {//desabilita la posibilidad de cambiar la animacion mientras no se halla finalizado la anterior es decir 1 segundo
     

      return;
    }
    
      this.toogleAnim ? this.barToEquis() : this.equistoBar();
      //pasa a true
      
      

        this.toogleAnim = !this.toogleAnim;


  }
  animTop;
  animBottom;
  animIzq;
  animDer;
  barToEquis(){
          this.animTop = "dashtopF 1000ms ease forwards ";
          this.animBottom = "dashtopF 1000ms ease forwards ";
      
          this.animIzq = "dashcenterF 1000ms ease forwards ";
          this.animDer = "dashcenterFder 1000ms ease forwards ";

    }

    equistoBar(){

          this.animTop = "dashtopR 1000ms ease forwards ";
          this.animBottom = "dashtopR 1000ms ease forwards ";

          this.animIzq = "dashcenterR 1000ms ease forwards ";
          this.animDer = "dashcenterRder 1000ms ease forwards ";
      
    }
}
