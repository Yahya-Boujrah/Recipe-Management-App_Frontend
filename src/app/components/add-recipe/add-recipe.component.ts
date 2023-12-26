import { Component } from '@angular/core';

import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {

}
