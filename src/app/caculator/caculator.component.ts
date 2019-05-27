import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.css']
})
export class CaculatorComponent implements OnInit {
  first: number;
  dau = '+';
  second: number;
  kq: number;
  constructor() { }

  ngOnInit() {
  }

  calutate(first: string, second: string, dau: string): void {
    this.first = parseFloat(first);
    this.second = parseFloat(second);
    this.dau = dau;
    switch (this.dau) {
      case '+':
        this.kq = this.second + this.first;
        break;
      case  '-':
        this.kq = this.first - this.second;
        break;
      case  '*':
        this.kq = this.first * this.second;
        break;
      default:
        this.kq = this.first / this.second;
    }

  }
}
