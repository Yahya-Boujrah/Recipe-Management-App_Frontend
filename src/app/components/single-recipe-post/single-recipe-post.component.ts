import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageHeaderComponent } from '../page-header/page-header.component';
import { Recipe } from '../../interfaces/recipe';

import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-single-recipe-post',
  standalone: true,
  imports: [PageHeaderComponent, FontAwesomeModule],
  templateUrl: './single-recipe-post.component.html',
  styleUrl: './single-recipe-post.component.css'
})
export class SingleRecipePostComponent implements OnInit {
  solidStar = solidStar;
  regularStar = regularStar;

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipe !: Recipe;

  ngOnInit(): void {
    this.recipe = history.state.recipe;
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
