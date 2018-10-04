import { Injectable } from '@angular/core';
import { Recipe } from '../_interfaces/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
   // tslint:disable-next-line:max-line-length
   private recipes: Recipe[] = [new Recipe('Burrito', 'Healthy Veggie Burrito', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
   // tslint:disable-next-line:max-line-length
   new Recipe('Dosa', 'Crunchy Rice & Lentil Crepe', 'https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
   // tslint:disable-next-line:max-line-length
   new Recipe('Curry', 'Potato & Peas Curry', 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')];
  constructor() { }

  getRecipes() {
    // return a copy of the private recipes array.
    return this.recipes.slice();
  }
}
