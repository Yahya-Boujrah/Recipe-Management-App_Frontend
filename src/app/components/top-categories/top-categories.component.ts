import { Component } from '@angular/core';
import { Category } from '../../interfaces/category';

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css'
})
export class TopCategoriesComponent {
  

  categories: { id: string, src: string , title:string ,desc:string}[] = [
    { id: "1", src: "/assets/img/bg-img/meats.jpg", title : "Meat And Poultry", desc : "Simple & Delicious"},
    { id: "2", src: "/assets/img/bg-img/desserts.jpg" ,title : "Desserts", desc : "Simple & Delicious" }
  ];
}
