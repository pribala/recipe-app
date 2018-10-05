import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_interfaces/recipe.model';
import { RecipeService } from '../_services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
       this.selectedRecipe = recipe;
    });
  }
}
