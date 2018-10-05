import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../_interfaces/ingredient.model';
import { ShoppingListService } from '../../_services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('name') name: ElementRef;
  @ViewChild('quantity') quantity: ElementRef;
  @ViewChild('unit') unit: ElementRef;
  item: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient() {
    this.item = new Ingredient(this.name.nativeElement.value, this.quantity.nativeElement.value, this.unit.nativeElement.value);
    this.shoppingListService.addNewIngredient(this.item);
  }

  clear() {
  }

  deleteIngredient() {

  }

}
