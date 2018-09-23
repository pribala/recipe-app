import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../_interfaces/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  recipes: Recipe[] = [new Recipe('Burrito', 'Healthy Veggie Burrito', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
                       // tslint:disable-next-line:max-line-length
                       new Recipe('Dosa', 'Crunchy Rice & Lentil Crepe', 'https://images.pexels.com/photos/221143/pexels-photo-221143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'),
                       // tslint:disable-next-line:max-line-length
                       new Recipe('Curry', 'Potato & Peas Curry', 'https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')];
  constructor() { }

  ngOnInit() {
  }

}
