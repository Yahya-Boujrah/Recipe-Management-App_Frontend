import { Component, OnInit, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Recipe } from '../../interfaces/recipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  animations:[],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent implements OnInit{

  private searchService = inject(SearchService);
  private router = inject(Router);

  latestRecipe !: Recipe;

  ngOnInit(): void {
    this.searchService.getLatestRecipe().subscribe(response =>{
      this.latestRecipe = response.data.getLatestRecipe;
    });
  }

  seeRecipe(){
    this.router.navigate(['singleRecipePost'], { state: { recipe: this.latestRecipe } });
  }

  pictures: { id: string, src: string }[] = [
    { id: "1", src: "/assets/img/bg-img/bg1.jpg" },
  ];


}
