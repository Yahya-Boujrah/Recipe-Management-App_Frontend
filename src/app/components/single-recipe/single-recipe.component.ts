import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { Recipe } from '../../interfaces/recipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTrash, faX} from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../../services/recipe.service';

import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-single-recipe',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.css'
})
export class SingleRecipeComponent {
 
  faTrash = faTrash;
  solidStar = solidStar;
  regularStar = regularStar;

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);

  @Input()
  recipe !: Recipe;

  singleRecipePost() : void {
    this.router.navigate(['singleRecipePost'], { state: { recipe: this.recipe } });
  }

  removeRecipe(id ?: string) : void {
    if(id){
      this.recipeService.deleteRecipe(id).subscribe( (response: any) => {
        console.log('Recipe deleted successfully:', response);
        this.router.navigate(['my-recipes']);
      })
    } else {
      console.error('Recipe ID is missing.');
    }
  }

  public getStarsArray(): number[] {
    const filledStars = Math.floor(this.recipe.rating as number);
    return Array.from({ length: filledStars });
  }
  
  public getEmptyStarsArray(): number[] {
    const emptyStars = 5 - Math.floor(this.recipe.rating as number);
    return Array.from({ length: emptyStars });
  }
}
