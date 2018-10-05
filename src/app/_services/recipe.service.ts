import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../_interfaces/recipe.model';
import { Ingredient } from '../_interfaces/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
   // tslint:disable-next-line:max-line-length
   private recipes: Recipe[] = [
     new Recipe(
       'Burrito',
       'Healthy Veggie Burrito',
       'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
       [new Ingredient('Black Beans', 1, 'can'),
       new Ingredient('Rice', 2, 'cups'),
       new Ingredient('Tortilla Wrap', 3),
       new Ingredient('Peppers', 2),
       new Ingredient('Onions', 3),
       new Ingredient('Tomatoes', 4)]
      ),
   // tslint:disable-next-line:max-line-length
   new Recipe(
     'Dosa',
     'Crunchy Rice & Lentil Crepe',
     'https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     [new Ingredient('Dosa batter', 1, 'gallon'),
      new Ingredient('Potato', 4),
      new Ingredient('Onion', 4),
      new Ingredient('Oil', 1, 'gallon')]),
   // tslint:disable-next-line:max-line-length
   new Recipe(
     'Curry',
     'Potato & Peas Curry',
     'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      [new Ingredient('Peas', 1, 'lb'),
       new Ingredient('Potato', 1, 'lb'),
       new Ingredient('Tomato', 1, 'can')])];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    // return a copy of the private recipes array.
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
