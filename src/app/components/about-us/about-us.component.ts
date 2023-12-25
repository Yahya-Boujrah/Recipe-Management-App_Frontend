import { Component } from '@angular/core';

import { PageHeaderComponent } from '../page-header/page-header.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [PageHeaderComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  icons : {id:string, src:string, counter:number, category:string}[] = [
    {id:"1", src:"assets/img/core-img/salad.png", counter : 100, category: "Salad receipies"},
    {id:"1", src:"assets/img/core-img/hamburger.png", counter : 25, category: "Burger receipes"},
    {id:"1", src:"assets/img/core-img/rib.png", counter : 400, category: "Meat receipies"},
    {id:"1", src:"assets/img/core-img/pancake.png", counter : 200, category: "Desert receipes"},

  ]
}
