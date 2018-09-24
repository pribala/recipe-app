import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_interfaces/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  showDetails(item) {
    this.selectedRecipe = item;
  }

}
