import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../interfaces/recipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
 
  solidStar = solidStar;
  regularStar = regularStar;

  private router = inject(Router);

  @Input()
  recipe !: Recipe;

  singleRecipePost() : void {
    this.router.navigate(['singleRecipePost'], { state: { recipe: this.recipe } });
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
