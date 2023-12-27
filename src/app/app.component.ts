import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginInComponent } from './components/login-in/login-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SingleRecipeComponent } from './components/single-recipe/single-recipe.component';
import { SingleRecipePostComponent } from './components/single-recipe-post/single-recipe-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginInComponent, SignUpComponent, SingleRecipePostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Recipe-Management-App';
}
