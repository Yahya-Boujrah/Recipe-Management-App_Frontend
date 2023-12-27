import { Component } from '@angular/core';
import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-top-recipes',
  standalone: true,
  imports: [SingleRecipeComponent],
  templateUrl: './top-recipes.component.html',
  styleUrl: './top-recipes.component.css'
})
export class TopRecipesComponent {

  recipes !: Recipe[];

  // recipes :id: string, title: string, desc: string, img: string, createdAt: string, category: string[], ingredients: string[], method: string[], user: User
  //   {id: "1", img: "assets/img/bg-img/r1.jpg", title: "Sushi Easy Receipe"},
  //   {id: "2", img: "assets/img/bg-img/r2.jpg", title: "Homemade Burger"},
  //   {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},
  //   {id: "4", img: "assets/img/bg-img/r4.jpg", title: "Calabasa soup"},
  //   {id: "5", img: "assets/img/bg-img/r5.jpg", title: "Homemade Breakfast"},
  //   {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"}
  // ]
}
