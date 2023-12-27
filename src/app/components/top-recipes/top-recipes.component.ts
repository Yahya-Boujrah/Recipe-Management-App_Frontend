import { Component, OnInit, inject } from '@angular/core';
import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { Recipe } from '../../interfaces/recipe';
import { SearchService } from '../../services/search.service';
import { response } from 'express';

@Component({
  selector: 'app-top-recipes',
  standalone: true,
  imports: [SingleRecipeComponent],
  templateUrl: './top-recipes.component.html',
  styleUrl: './top-recipes.component.css'
})
export class TopRecipesComponent implements OnInit{

  recipes !: Recipe[];

  private searchService = inject(SearchService);
  top6Recipes !: Recipe[];

  ngOnInit(): void {
    this.searchService.top6RatedRecipes().subscribe(response =>{
      this.top6Recipes = response.data.top6RatedRecipes;
    });
  }

}
