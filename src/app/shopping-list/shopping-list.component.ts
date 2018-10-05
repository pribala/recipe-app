import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../_services/shopping-list.service';
import { Ingredient } from '../_interfaces/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getList();
    this.shoppingListService.ingredientsAdded.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }
}
