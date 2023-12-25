import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { RecipeComponent } from './components/recipe/recipe.component';
import { LoginInComponent } from './components/login-in/login-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Recipe-Management-App';
}
