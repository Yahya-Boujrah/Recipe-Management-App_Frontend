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
  imports: [CommonModule, SingleRecipeComponent, PageHeaderComponent],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
// export class AllRecipesComponent implements OnInit{
export class AllRecipesComponent {

  private recipeService = inject(RecipeService);

  private searchService = inject(SearchService);

  // recipes !: Recipe[];

  recipes: Recipe[] = [
    {
      id: '1',
      title: 'Sushi Easy Receipe',
      description:
        'descriptiondescriptiondescription description description description',
      picture: '../../../assets/img/bg-img/r1.jpg',
      category: { id: '1', name: 'cat1' },
      createdAt: '2015-09-12',
      ingredients: [
        { name: 'sel', description: 'on ajout un petit peu du sel' },
        { name: 'sel', description: 'on ajout un petit peu du sel' },
      ],
      instructions: [
        { number: 1, description: "on ajout un petit peu du sel et du poivre" },
        { number: 2, description: "on ajout un petit peu du sel et du poivre" }
      ]
    },
    {
      id: '2',
      title: 'Sushi Easy Receipe',
      description:
        'descriptiondescriptiondescription description description description',
      picture: '../../../assets/img/bg-img/r2.jpg',
      category: { id: '1', name: 'cat1' },
      createdAt: '2015-09-12',
      ingredients: [
        { name: 'sel', description: 'on ajout un petit peu du sel' },
        { name: 'sel', description: 'on ajout un petit peu du sel' },
      ],
      instructions: [
        { number: 1, description: "on ajout un petit peu du sel et du poivre" },
        { number: 2, description: "on ajout un petit peu du sel et du poivre" }
      ]
    },
    {
      id: '3',
      title: 'Sushi Easy Receipe',
      description:
        'descriptiondescriptiondescription description description description',
      picture: '../../../assets/img/bg-img/r3.jpg',
      category: { id: '1', name: 'cat1' },
      createdAt: '2015-09-12',
      ingredients: [
        { name: 'sel', description: 'on ajout un petit peu du sel' },
        { name: 'sel', description: 'on ajout un petit peu du sel' },
      ],
      instructions: [
        { number: 1, description: "on ajout un petit peu du sel et du poivre" },
        { number: 2, description: "on ajout un petit peu du sel et du poivre" }
      ]
    },

  ];

  ngOnInit(): void {
    this.recipeService.allRecipe().valueChanges.subscribe((response: any) => {
      this.recipes = response.data?.allRecipes;
    });
  }

  doSearch(value: string) {
    this.searchService.searchInFields(value).subscribe();
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
}


