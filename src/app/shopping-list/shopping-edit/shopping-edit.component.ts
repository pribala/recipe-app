import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../_interfaces/ingredient.model';

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
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
    this.item = new Ingredient(this.name.nativeElement.value, this.quantity.nativeElement.value, this.unit.nativeElement.value);
    this.newIngredient.emit(this.item);
  }

  clear() {
 
  }

  deleteIngredient() {
    
  }

}
