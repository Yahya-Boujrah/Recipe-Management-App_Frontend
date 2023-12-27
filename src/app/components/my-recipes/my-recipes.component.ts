import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';

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

  recipes !: Recipe[];

  
  // recipeDumps : id: string, title: string, desc: string, img: string, createdAt: string, category: string[], ingredients: string[], method: string[], user: User = [
  //   {id: "1", title: "Sushi Easy Receipe", desc: "description", img: "assets/img/bg-img/r1.jpg", createdAt: "2015-09-12", category: "cat1", ingredients: ["sel", "poivre"]},
  //   {id: "2", title: "Sushi Easy Receipe", desc: "description", img: "assets/img/bg-img/r1.jpg", createdAt: "2015-09-12", category: "cat1", ingredients: ["sel", "poivre"]},
  //   {id: "3", title: "Sushi Easy Receipe", desc: "description", img: "assets/img/bg-img/r1.jpg", createdAt: "2015-09-12", category: "cat1", ingredients: ["sel", "poivre"]},

  // ];

  addRecipe(){
    this.router.navigate(['add-recipe']);

  }
}
