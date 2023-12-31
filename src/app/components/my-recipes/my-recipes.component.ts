import { Component, OnInit, inject } from '@angular/core';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { SingleRecipeComponent } from '../single-recipe/single-recipe.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { RecipeService } from '../../services/recipe.service';
import { response } from 'express';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [PageHeaderComponent, SingleRecipeComponent],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.css',
})
export class MyRecipesComponent implements OnInit {



  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);

  recipes !: Recipe[];


  ngOnInit(): void {
    this.recipeService.getUserRecipes().subscribe(response => {

      this.recipes = response?.data.getUserRecipes;
    })
  }

  // recipies = [
  //   {
  //     id: '1',
  //     title: 'Sushi Easy Receipe',
  //     description:
  //       'descriptiondescriptiondescription description description description',
  //     picture: '../../../assets/img/bg-img/r1.jpg',
  //     category: { id: '1', name: 'cat1' },
  //     createdAt: '2015-09-12',
  //     rating:5,
  //     ingredients: [
  //       { name: 'sel', description: 'on ajout un petit peu du sel' },
  //       { name: 'sel', description: 'on ajout un petit peu du sel' },
  //     ],
  //     instructions: [
  //       { number: 1, description: "on ajout un petit peu du sel et du poivre"},
  //       { number:2, description: "on ajout un petit peu du sel et du poivre"}
  //     ]
  //   },
  //   {
  //     id: '2',
  //     title: 'Sushi Easy Receipe',
  //     rating:3,
  //     description:
  //       'descriptiondescriptiondescription description description description',
  //     picture: '../../../assets/img/bg-img/r2.jpg',
  //     category: { id: '1', name: 'cat1' },
  //     createdAt: '2015-09-12',
  //     ingredients: [
  //       { name: 'sel', description: 'on ajout un petit peu du sel' },
  //       { name: 'sel', description: 'on ajout un petit peu du sel' },
  //     ],
  //     instructions: [
  //       { number: 1, description: "on ajout un petit peu du sel et du poivre"},
  //       { number:2, description: "on ajout un petit peu du sel et du poivre"}
  //     ]
  //   },
  //   {
  //     id: '3',
  //     title: 'Sushi Easy Receipe',
  //     description:
  //       'descriptiondescriptiondescription description description description',
  //     picture: '../../../assets/img/bg-img/r3.jpg',
  //     category: { id: '1', name: 'cat1' },
  //     createdAt: '2015-09-12',
  //     rating:2,
  //     ingredients: [
  //       { name: 'sel', description: 'on ajout un petit peu du sel' },
  //       { name: 'sel', description: 'on ajout un petit peu du sel' },
  //     ],
  //     instructions: [
  //       { number: 1, description: "on ajout un petit peu du sel et du poivre"},
  //       { number:2, description: "on ajout un petit peu du sel et du poivre"}
  //     ]
  //   },
    
  // ];

  addRecipe() {
    this.router.navigate(['add-recipe']);
  }


  
 
}
