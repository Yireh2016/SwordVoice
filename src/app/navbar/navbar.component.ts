import { Component, OnInit , HostListener , Output ,
          AfterViewInit , AfterViewChecked , EventEmitter } from '@angular/core';
import { Router  } from '@angular/router';
import {  trigger,  state,  style,  animate,  transition , keyframes } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';

 

const WRAPPER_SIZE=5000;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
  
trigger('flyInOut',[
      state('in', style({transform:'translateX(0)'})),
      transition('out => in',[


        animate('1000ms ease', 
         keyframes([
           style({transform:'translateX(100%)',offset:0}),
           style({transform:'translateX(0)',offset:1}) 

           ]))//style({transform:'translateX(100%)'})
      ]),
     state('out', style({transform:'translateX(100%)'})),
      transition('in => out',[
        animate('1000ms ease', 
          keyframes([
           style({transform:'translateX(0)',offset:0}),
           style({transform:'translateX(100%)',offset:1}) 

           ]))
      ]),
     ])
  ,
   trigger('fade', [
    state('in', style({opacity: '1',display: 'block'})),
    state('out', style({ opacity: '0',display:'none'})),
      transition('out => in', [
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
export class NavbarComponent implements OnInit  , AfterViewChecked {
 topMargin:string;
 in="out";
 titleIn="in";
 routeIndex=0;
 newLang='Español';
 @Output() showComponent = new EventEmitter<string>();
 
     redesSociales=[
      {icono:'fab fa-facebook-f ',ruta:'https://www.facebook.com/SwordVoice/'},
      {icono:'fab fa-youtube',ruta:'https://www.youtube.com/channel/UCle-HTb2TPvcVk0AaljQyOQ'},
      {icono:'fab fa-instagram',ruta:'https://www.instagram.com/swordvoice_official/'},
      {icono:'fab fa-twitter',ruta:'https://twitter.com/SwordVoice_1'},
    ]

  movil=false;//por defecto se asume que el dispositivo es PC
  



  constructor(private router: Router, public translate: TranslateService) { 

    this.router=router;

    translate.setDefaultLang('en');
    translate.addLangs(["en", "es"]);
    //let browserLang = translate.getBrowserLang();
    //translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

   switchLanguage(language: string) {
     console.log("cambiando idioma");
    this.translate.use(language);
  }

  newLanguage(){
    if (this.newLang === 'English') {
      this.newLang = 'Español';
      this.switchLanguage('en');
    }else{
      this.newLang = 'English';
      this.switchLanguage('es');
    }
  }




  ngOnInit() {
  //  this.checkResolution();
   // this.checkOrientation();   
  }



  ngAfterViewChecked(){

  }



  
  
// detectar  cambio de pantalla y revisar orientacion y resolucion
 /* @HostListener('window:resize', ['$event']) onResize(event) {
    //this.checkResolution();
   // this.checkOrientation();
  }*/

 /*
   
  checkOrientation(){
    if ( window.innerWidth > window.innerHeight ){
    }else{
    }
  }

  checkResolution(){    
    if ( window.innerWidth <= 576 ){
      this.movil=true;//el dispositivo es telefono o tabla
    }

    if ( window.innerWidth > 576  && window.innerWidth <= 768 ){
      this.movil=true;//el dispositivo es telefono o tabla

    }

    if ( window.innerWidth > 768 ){
      this.movil=false 
    }
  }*/
  unable=false;
  collapse(){

    if(this.unable){
      return
    }

    this.unable=true;//deshabilita el colapse 
    let timer2 = setTimeout(() => this.unable=false,1300);
    this.in = this.in === 'in' ? 'out' : 'in';//menu
      

  

    if (this.titleIn === 'out') {//titulo y pagina
    
      let timer= setTimeout( () => {
        this.titleIn = 'in';
        this.showComponent.emit('in');


      } , 1000);
      
    }else{
       this.titleIn = 'out';
        this.showComponent.emit('out');
        
    }
  }
}
