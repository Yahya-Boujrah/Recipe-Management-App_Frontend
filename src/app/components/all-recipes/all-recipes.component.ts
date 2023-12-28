import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { SearchService } from '../../services/search.service';
import { forkJoin } from 'rxjs';
import { response } from 'express';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [CommonModule, SingleRecipeComponent, PageHeaderComponent],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit{

  private recipeService = inject(RecipeService);

  private searchService = inject(SearchService);

  recipes: Recipe[] = [
    // {
    //   id: '1',
    //   title: 'Sushi Easy Receipe',
    //   description:
    //     'descriptiondescriptiondescription description description description',
    //   picture: '/assets/recipes/tiramisu.jpg',
    //   category: { id: '1', name: 'cat1' },
    //   createdAt: '2015-09-12',
    //   ingredients: [
    //     { name: 'sel', description: 'on ajout un petit peu du sel' },
    //     { name: 'sel', description: 'on ajout un petit peu du sel' },
    //   ],
    //   instructions: [
    //     { number: 1, description: "on ajout un petit peu du sel et du poivre" },
    //     { number: 2, description: "on ajout un petit peu du sel et du poivre" }
    //   ]
    // },
    // {
    //   id: '2',
    //   title: 'Sushi Easy Receipe',
    //   description:
    //     'descriptiondescriptiondescription description description description',
    //   picture: '/assets/recipes/flourless-cake.jpg',
    //   category: { id: '1', name: 'cat1' },
    //   createdAt: '2015-09-12',
    //   ingredients: [
    //     { name: 'sel', description: 'on ajout un petit peu du sel' },
    //     { name: 'sel', description: 'on ajout un petit peu du sel' },
    //   ],
    //   instructions: [
    //     { number: 1, description: "on ajout un petit peu du sel et du poivre" },
    //     { number: 2, description: "on ajout un petit peu du sel et du poivre" }
    //   ]
    // },
    // {
    //   id: '3',
    //   title: 'Sushi Easy Receipe',
    //   description:
    //     'descriptiondescriptiondescription description description description',
    //   picture: '/assets/recipes/crispy-chicken.jpeg',
    //   category: { id: '1', name: 'cat1' },
    //   createdAt: '2015-09-12',
    //   ingredients: [
    //     { name: 'sel', description: 'on ajout un petit peu du sel' },
    //     { name: 'sel', description: 'on ajout un petit peu du sel' },
    //   ],
    //   instructions: [
    //     { number: 1, description: "on ajout un petit peu du sel et du poivre" },
    //     { number: 2, description: "on ajout un petit peu du sel et du poivre" }
    //   ]
    // },

  ];

  allRecipes(){
    this.recipeService.allRecipe().valueChanges.subscribe((response: any) => {
      console.log(response.data);
      this.recipes = response.data?.allRecipes;
      console.log(this.recipes);
    });
  }

  ngOnInit(): void {
    this.allRecipes();
  }

  // doSearch(title: string) {
  //   this.searchService.searchInFields(title).subscribe(
  //     (response: any) => {
  //       console.log(response.data);
  //       this.recipes = response.data?.searchInFields;
  //       console.log(this.recipes);
  //     });
  // }

  // fuzzySearch(title: string){
  //   this.searchService.getFuzzyResults(title).subscribe(
  //     (response: any) => {
  //       console.log(response.data);
  //       this.recipes = response.data?.getFuzzyResults;
  //       console.log(this.recipes);
  //     }
  //   );
  // }

  globalSearch(title: string) {
    if (!title){
      this.allRecipes();
      return;
    }
    const search1$ = this.searchService.searchInFields(title);
    const search2$ = this.searchService.getFuzzyResults(title);
  
    forkJoin([search1$, search2$]).subscribe(
      ([response1, response2]) => {
        // Handle potential undefined responses with default empty arrays
        const searchResults = response1.data?.searchRecipesInFields || [];
        const fuzzyResults = response2.data?.recipesFuzzySearch || [];
  
        // Combine and filter the results
        const combinedResults = [...searchResults, ...fuzzyResults];
        this.recipes = this.removeDuplicates(combinedResults);
        console.log(this.recipes);
      },
      error => {
        // Handle any errors that might occur
        console.error('Error in globalSearch:', error);
      }
    );
  }

  removeDuplicates(recipes: Recipe[]): Recipe[] {
    const unique: Record<string, Recipe> = {};
    recipes.forEach(recipe => {
      if (recipe.id !== undefined && typeof recipe.id === 'string') {
        unique[recipe.id] = recipe;
      }
    });
    return Object.values(unique);
  }


  getByCategory(category: string) {
    console.log(category);

    this.searchService.recipesByCategory(category).subscribe((response: any) => {
      this.recipes = response.data.recipesByCategory;
    });

    console.log(this.recipes);

  }

  sortData(sort: string) {
    console.log(sort);

    if (sort == '') {
      this.recipeService.allRecipe().valueChanges.subscribe((response: any) => {
        this.recipes = response.data?.allRecipes;
      });
    } else if (sort == 'Latest') {
      this.searchService.sortRecipesByDate().subscribe((response: any) => {
        this.recipes = response.data.sortRecipesByDate;
      });

    } else if (sort == 'TopRated') {
      this.searchService.sortRecipesByRating().subscribe((response: any) => {
        this.recipes = response.data.sortRecipesByRating;
      });
    }
  }

  getByDate(date : string){
    this.searchService.recipesCreatedAfterDate(date).subscribe(response => {
      this.recipes = response.data.recipesCreatedAfterDate;

    })  
  }
}


