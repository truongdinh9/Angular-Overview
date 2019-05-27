import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {
  colorfeild = 'red' ;

  constructor() { }

  ngOnInit() {
  }

  color(colo: string) {
    this.colorfeild = colo;
  }
}
