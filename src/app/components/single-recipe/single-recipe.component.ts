import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-recipe',
  standalone: true,
  imports: [],
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.css'
})
export class SingleRecipeComponent {

  @Input()
  recipe !: { id: string, img: string , title:string}
}
