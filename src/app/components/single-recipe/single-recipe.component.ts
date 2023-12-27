import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { Recipe } from '../../interfaces/recipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faTrash, faX} from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-single-recipe',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.css'
})
export class SingleRecipeComponent {
 
  faTrash = faTrash

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
}
