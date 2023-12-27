import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageHeaderComponent } from '../page-header/page-header.component';
import { Recipe } from '../../interfaces/recipe';

@Component({
  selector: 'app-single-recipe-post',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './single-recipe-post.component.html',
  styleUrl: './single-recipe-post.component.css'
})
export class SingleRecipePostComponent implements OnInit {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  recipe !: Recipe;

  ngOnInit(): void {
    this.recipe = history.state.recipe;
  }

  // recipe: {id: string, title: string, img: string, desc: string,category: string, ingredients: string[], method: string[], createdAt: string, owner_name: string} = {
  //   id: "1", 
  //   title: "Classic Chocolate Cake", 
  //   img: "../../../assets/img/cake.jpg",
  //   desc: "Indulge in the rich and moist goodness of this classic chocolate cake. Perfect for any occasion, this decadent treat is sure to satisfy your chocolate cravings.Indulge in the rich and moist goodness of this classic chocolate cake. Perfect for any occasion, this decadent treat is sure to satisfy your chocolate cravings.Indulge in the rich and moist goodness of this classic chocolate cake. Perfect for any occasion, this decadent treat is sure to satisfy your chocolate cravings.",
  //   category: "Cat1",
  //   ingredients: [
  //     "1 and 3/4 cups all-purpose flour",
  //     "1 and 3/4 cups all-purpose flour",
  //     "1 and 3/4 cups all-purpose flour",
  //     "1 and 3/4 cups all-purpose flour",
  //     "1 and 3/4 cups all-purpose flour"
  //   ],
  //   method: [
  //     "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
  //     "In a large mixing bowl, sift together the flour, baking powder, baking soda, cocoa powder, sugar, and salt.",
  //     "In a large mixing bowl, sift together the flour, baking powder, baking soda, cocoa powder, sugar, and salt."
  //   ],
  //   createdAt: "2023-05-15",
  //   owner_name: "Yassmine Hsaini"
  // }

 
}
