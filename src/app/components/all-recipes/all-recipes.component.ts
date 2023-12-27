import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [CommonModule,SingleRecipeComponent, PageHeaderComponent],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit{

  private recipeService = inject(RecipeService);

  private searchService = inject(SearchService);

  recipes !: Recipe[];

  ngOnInit(): void {
    this.recipeService.allRecipe().valueChanges.subscribe((response: any) => {
      this.recipes = response.data?.allRecipes;
    });
  }

  // recipeDumps : { id: string, img: string , title:string}[] = [
  //   {id: "1", img: "assets/img/bg-img/r1.jpg", title: "Sushi Easy Receipe"},
  //   {id: "2", img: "assets/img/bg-img/r2.jpg", title: "Homemade Burger"},
  //   {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},
  //   {id: "4", img: "assets/img/bg-img/r4.jpg", title: "Calabasa soup"},
  //   {id: "5", img: "assets/img/bg-img/r5.jpg", title: "Homemade Breakfast"},
  //   {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
  //   {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
  //   {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
  //   {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
  //   {id: "6", img: "assets/img/bg-img/r6.jpg", title: "Healthy Fruit Desert"},
  //   {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},
  //   {id: "3", img: "assets/img/bg-img/r3.jpg", title: "Vegan Smoothie"},

  //]

  doSearch(value: string){
    this.searchService.searchInFields(value).subscribe();
  }

  getByCategory(category : string){
    console.log(category);
    
    this.searchService.recipesByCategory(category).subscribe((response: any) => {
      this.recipes = response;
    });

    console.log(this.recipes);
    
  }
}


