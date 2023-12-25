import { Component } from '@angular/core';
import { HomeHeaderComponent } from '../home-header/header.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { TopCategoriesComponent } from '../top-categories/top-categories.component';
import { TopRecipesComponent } from '../top-recipes/top-recipes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, NavbarComponent,TopCategoriesComponent,TopRecipesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
