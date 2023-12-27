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
  styleUrl: './my-recipes.component.css',
})
export class MyRecipesComponent {


  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipes !: Recipe[];

  recipies = [
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
        { number: 1, description: "on ajout un petit peu du sel et du poivre"},
        { number:2, description: "on ajout un petit peu du sel et du poivre"}
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
        { number: 1, description: "on ajout un petit peu du sel et du poivre"},
        { number:2, description: "on ajout un petit peu du sel et du poivre"}
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
        { number: 1, description: "on ajout un petit peu du sel et du poivre"},
        { number:2, description: "on ajout un petit peu du sel et du poivre"}
      ]
    },
    
  ];

  addRecipe() {
    this.router.navigate(['add-recipe']);
  }

  
 
}
