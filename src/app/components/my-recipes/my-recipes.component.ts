import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [PageHeaderComponent, SingleRecipeComponent],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.css'
})
export class MyRecipesComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  
  recipeDumps : { id: string, img: string , title:string}[] = [
    {id: "1", img: "assets/img/bg-img/r1.jpg", title: "Sushi Easy Receipe"},
    {id: "2", img: "assets/img/bg-img/r2.jpg", title: "Homemade Burger"},
    {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},

  ]

  addRecipe(){
    this.router.navigate(['add-recipe']);

  }
}
