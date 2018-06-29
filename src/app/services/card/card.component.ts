import { Component, OnInit , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Output() back1 : EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
  }

  unReveal(){
    this.back1.emit(true);
  }

}
