import { Component } from '@angular/core';

@Component({
  selector: 'app-top-recipes',
  standalone: true,
  imports: [],
  templateUrl: './top-recipes.component.html',
  styleUrl: './top-recipes.component.css'
})
export class TopRecipesComponent {

  recipes : { id: string, img: string , title:string}[] = [
    {id: "1", img: "assets/img/bg-img/r1.jpg", title: "Sushi Easy Receipe"},
    {id: "2", img: "assets/img/bg-img/r2.jpg", title: "Homemade Burger"},
    {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},
    {id: "4", img: "assets/img/bg-img/r4.jpg", title: "Calabasa soup"},
    {id: "5", img: "assets/img/bg-img/r5.jpg", title: "Homemade Breakfast"},
    {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"}
  ]
}
