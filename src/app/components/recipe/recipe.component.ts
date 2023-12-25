import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  recipe: {id: string, title: string, desc: string, ingredients: string[], method: string[], date_creation: string, owner_name: string} = {
    id: "1", 
    title: "Classic Chocolate Cake", 
    desc: "Indulge in the rich and moist goodness of this classic chocolate cake. Perfect for any occasion, this decadent treat is sure to satisfy your chocolate cravings.Indulge in the rich and moist goodness of this classic chocolate cake. Perfect for any occasion, this decadent treat is sure to satisfy your chocolate cravings.Indulge in the rich and moist goodness of this classic chocolate cake. Perfect for any occasion, this decadent treat is sure to satisfy your chocolate cravings.",
    ingredients: [
      "1 and 3/4 cups all-purpose flour",
      "1 and 3/4 cups all-purpose flour",
      "1 and 3/4 cups all-purpose flour",
      "1 and 3/4 cups all-purpose flour",
      "1 and 3/4 cups all-purpose flour"
    ],
    method: [
      "Preheat your oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.",
      "In a large mixing bowl, sift together the flour, baking powder, baking soda, cocoa powder, sugar, and salt.",
      "In a large mixing bowl, sift together the flour, baking powder, baking soda, cocoa powder, sugar, and salt."
    ],
    date_creation: "2023-05-15",
    owner_name: "Yassmine Hsaini"
  }

 
}
