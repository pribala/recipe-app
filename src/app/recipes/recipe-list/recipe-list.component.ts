import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../_interfaces/recipe.model';
import { RecipeService } from '../../_services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
   this.recipes = this.recipeService.getRecipes();
   this.recipeSelected.emit(this.recipes[0]);
  }

  selectedRecipe(item: Recipe) {
    this.recipeSelected.emit(item);
  }

}
