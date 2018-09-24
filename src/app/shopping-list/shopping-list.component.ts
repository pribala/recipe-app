import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../_interfaces/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 3, 'lbs'),
    new Ingredient('Milk', 1, 'gallon'),
    new Ingredient('Avocado', 4)
  ]
  constructor() { }

  ngOnInit() {
  }

}
