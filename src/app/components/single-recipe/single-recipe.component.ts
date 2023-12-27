import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-single-recipe',
  standalone: true,
  imports: [],
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.css'
})
export class SingleRecipeComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  @Input()
  recipe !: Recipe;

  singleRecipePost() : void {
    this.router.navigate(['singleRecipePost'], {state: { recipe: this.recipe }});
  }
}
