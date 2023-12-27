
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { PageHeaderComponent } from '../page-header/page-header.component';
import { Ingredient } from '../../interfaces/ingredient';
import { Instruction } from '../../interfaces/instruction';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {faX} from '@fortawesome/free-solid-svg-icons';

import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../interfaces/recipe';
import { log } from 'console';
import { random } from 'node-forge';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [PageHeaderComponent, FontAwesomeModule, FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

  faTrash = faTrash;
  faCirclePlus = faCirclePlus;
  faX =faX;
  
  private recipeService = inject(RecipeService);

  ingredients : Ingredient[] = []; 
  steps : Instruction[] = [];


  addIngredient(form : NgForm){
    console.log("value" + JSON.stringify(form.value));
    const ingredient :Ingredient=  {
      id: random.toString(),
      name : form.value.name,
      description : form.value.description
    };

    this.ingredients.push(ingredient);
    form.reset();
  
  }
  removeIngredient(index : number){
    console.log(index);
    console.log(this.ingredients);
    
    
    this.ingredients.splice(index,1);
  }


  addInstruction(form : NgForm) : void{
    const step :Instruction=  {
      id: random.toString(),
      number : this.steps.length + 1,
      description : form.value.description
    };
    this.steps.push(step);
    form.reset();
  }

  removeInstruction(index : number) : void {
    console.log(index);
    console.log(this.steps);
    
    this.steps.splice(index,1);

    this.steps.forEach((step, i) => {
      step.number = i + 1;
  });
  }


  addRecipe(recipeForm : NgForm) : void{
    // console.log("from " + JSON.parse(JSON.stringify(recipeForm)));
    
    console.log("value" + JSON.stringify(recipeForm.value));

    const recipe : Recipe = {
      id:  random.toString(),
      title: recipeForm.value.title,
      description : recipeForm.value.description,
      picture : recipeForm.value.picture,
      createdAt : new Date().toString(),
      category : {
        id:random.toString(),
        name: recipeForm.value.category
      },
      ingredients : this.ingredients,
      instructions : this.steps
    }
    console.log("recipe " +  JSON.stringify(recipe));
    
    
    this.recipeService.addRecipe(recipeForm.value)
    this.ingredients = [];
    this.steps = [];
    recipeForm.reset();

  }

}