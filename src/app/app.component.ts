import {  Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators'
import { Router, NavigationEnd } from '@angular/router'



@Component({
  selector: 'app-root',
  /*template: `
  <h1>Universal Demo using Angular and Angular CLI</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/lazy">Lazy</a>
  <a routerLink="/lazy/nested">Lazy_Nested</a>
  <router-outlet></router-outlet>
  `,*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
/*

##########################
##########################
##########################
Codigo para que luego del enrutamiento, la patalla suba al inicio

##########################
##########################
##########################
##########################

*/
subscription: Subscription;

constructor(private router: Router){

}

ngOnInit(){
 this.subscription = this.router.events
   .pipe(
     filter(event => event instanceof NavigationEnd)
     )
   .subscribe(() => window.scrollTo(0,0));

}


ngOnDestroy(){
  this.subscription.unsubscribe();
}


}
