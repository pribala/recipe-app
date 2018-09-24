import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../../_interfaces/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  @Output() recipeDetail = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  showDetails() {
   this.recipeDetail.emit(this.recipe);
  }

}
