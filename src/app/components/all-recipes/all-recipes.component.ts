import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [CommonModule,SingleRecipeComponent, PageHeaderComponent],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent {

  recipes : { id: string, img: string , title:string}[] = [
    {id: "1", img: "assets/img/bg-img/r1.jpg", title: "Sushi Easy Receipe"},
    {id: "2", img: "assets/img/bg-img/r2.jpg", title: "Homemade Burger"},
    {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},
    {id: "4", img: "assets/img/bg-img/r4.jpg", title: "Calabasa soup"},
    {id: "5", img: "assets/img/bg-img/r5.jpg", title: "Homemade Breakfast"},
    {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
    {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
    {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
    {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
    {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"}
  ]
}

