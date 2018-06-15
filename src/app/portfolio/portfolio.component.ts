import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
titleIn;
  constructor() { }

  ngOnInit() {
  }


   showPortfolio(x:string){
    this.titleIn=x;
  }

}
