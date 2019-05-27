import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petName = 'ijdsaiad ';
  petImg = 'https://www.profitero.com/wp-content/uploads/2016/05/petcare-1.jpg';
  constructor() { }
  ngOnInit() {
  }

  updatepet(name: string, img: string) {
    this.petName = name;
    this.petImg = img;
  }
}

