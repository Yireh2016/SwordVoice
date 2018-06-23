import { Component, OnInit, HostListener, Inject, ElementRef, ViewChild} from '@angular/core'; 
import { Meta, Title } from "@angular/platform-browser";
import { NavbarComponent } from '../navbar/navbar.component';
import {  trigger,  state,  style,  animate,  transition , keyframes} from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';


//setup y animaciones
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [

 //Animacion de entrada de elementos con scroll
  trigger('flyFromBottom', [
        
    state('disappear',style(({opacity:'0',transform: 'translateY(100%)'}))),//estado desaparecer
    state('appear',style(({opacity:'1',transform: 'translateY(0)'}))),//estado aparecer

    transition('appear => disappear', [//transicion de aparecer a desaparecer
      style({transform: 'translateY(0)',opacity:'1'}),//from style
      animate(".7s ease",keyframes([ //transitions styles
        style(({opacity:'0.5',transform: 'translateY(20%)'})),
        style(({opacity:'0.4',transform: 'translateY(40%)'})),
        style(({opacity:'0.3',transform: 'translateY(60%)'})),
        style(({opacity:'0.2',transform: 'translateY(80%)'})),
        style(({opacity:'0',transform: 'translateY(100%)'})),
        ])
      )
    ]),

    transition('disappear => appear', [//transicion de desaparecer a aparecer
      style({transform: 'translateY(100%)',opacity:'0'}),//from style
      animate("0.4s ease",keyframes([ //transitions styles
        style(({opacity:'0',transform: 'translateY(80%)'})),
        style(({opacity:'0',transform: 'translateY(60%)'})),
        style(({opacity:'0',transform: 'translateY(40%)'})),
        style(({opacity:'0',transform: 'translateY(20%)'})),
        style(({opacity:'1',transform: 'translateY(0)'})),
        ])
      )
    ])
  ]),

  //Animacion de desvanecer y aparecer con el navbar y header
   trigger('fade', [
    state('in', style({opacity: '1',display: 'block'})),
    state('out', style({ opacity: '0'})),
      transition('out => in', [
        animate('500ms ease-in' )
        ]),
      transition('in => out', [
        animate( '10ms ease-out' ) 
        ])
    ]),
  ]
})
export class HomeComponent implements OnInit {//componente principal

  titleIn:string;//variable de control de animacion
  /*appearing= 'disappear';
  appearing2= 'disappear';
  appearing3= 'disappear';*/

    appearing= 'appear';
  appearing2= 'appear';
  appearing3= 'appear';

  imagenes = [
    {
        src:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
        alt: "Angular Framework",
      },
    {
      src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",
      alt: "Reactjs Library",
     },
    {
      src:"https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg",
      alt: "HTML5",
     },
     {
       src:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
       alt:"CSS3",
     },
     {
       src:"https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg",
       alt:"JavaScript",
     },
     {
       src:"https://upload.wikimedia.org/wikipedia/commons/7/7e/Node.js_logo_2015.svg",
       alt:"NodeJs",
     },
     {
       src:"https://upload.wikimedia.org/wikipedia/commons/d/d2/MongoDB-Logo-5c3a7405a85675366beb3a5ec4c032348c390b3f142f5e6dddf1d78e2df5cb5c.png",
       alt:"MongoDb",
     },
     {
       src:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Logo_jQuery.svg",
       alt:"Jquery"
     },
  ]
  
  @ViewChild('slide') slide: ElementRef;
  @ViewChild('summary') summary: ElementRef;
  @ViewChild('technologies') technologies: ElementRef;
  @ViewChild('support') support: ElementRef;

  //setting meta tags for SEO
  constructor( meta: Meta, title: Title, public translate: TranslateService) {
    title.setTitle('SwordVoice.com | Custom Website Design and Development');
    translate.setDefaultLang('en');
    translate.addLangs(["en", "es"]);
    meta.addTags([
      { name: 'author',   content: 'Jainer Muñoz'},
      { name: 'keywords', content: 'Web Desing, Responsive Web Design, Internet Marketing ,Custom Web Design'},
      { name: 'description', content: 'Custom Web Desing/Development and Internet Marketing Services' }
    ]);

  }



  //escuchando eventos de scroll en la pantalla
  @HostListener("window:scroll", [])

  onWindowScroll() {//se ejecuta cada vez que hay scroll
   
   let summaryPos = this.summary.nativeElement.getBoundingClientRect();
   let techsPos = this.technologies.nativeElement.getBoundingClientRect();
   let supportPos = this.support.nativeElement.getBoundingClientRect();
   let pageYOffset = window.pageYOffset;
   let innerHeight = window.innerHeight;

  
   this.appearing=this.objectAppear(summaryPos,innerHeight);
   this.appearing2=this.objectAppear(techsPos,innerHeight);
   this.appearing3=this.objectAppear(supportPos,innerHeight);
  }

  ngOnInit() {
  }

  objectAppear(obj,h){
    if (obj.top < h*.8) {//al 20 porciente de tamaño del objeto, empieza a aparecer
      return 'appear';
    }

    return 'disappear';
  }

  showHome(x:string){
    this.titleIn=x;
  }
}
