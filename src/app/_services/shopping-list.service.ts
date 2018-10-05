import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../_interfaces/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();
  private  ingredients: Ingredient[] = [
    new Ingredient('Potatoes', 3, 'lbs'),
    new Ingredient('Milk', 1, 'gallon'),
    new Ingredient('Avocado', 4)
  ];
  constructor() { }
  getList() {
    return this.ingredients.slice();
  }

  addNewIngredient(item: Ingredient) {
    this.ingredients.push(item);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }
}
