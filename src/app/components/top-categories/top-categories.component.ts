import { Component } from '@angular/core';

@Component({
  selector: 'app-top-categories',
  standalone: true,
  imports: [],
  templateUrl: './top-categories.component.html',
  styleUrl: './top-categories.component.css'
})
export class TopCategoriesComponent {
  
  categories: { id: string, src: string , title:string ,desc:string}[] = [
    { id: "1", src: "/assets/img/bg-img/bg2.jpg", title : "Burger receipies", desc : "Simple & Delicious"},
    { id: "2", src: "/assets/img/bg-img/bg3.jpg" ,title : "Meat receipies", desc : "Simple & Delicious" },
  ];
}