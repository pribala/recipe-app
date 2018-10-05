import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../_interfaces/recipe.model';
import { Ingredient } from '../../_interfaces/ingredient.model';
import { RecipeService } from '../../_services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
