import { Component } from '@angular/core';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [],
  animations:[],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css'
})
export class HomeHeaderComponent {

  pictures: { id: string, src: string }[] = [
    { id: "1", src: "/assets/img/bg-img/bg1.jpg" },
    // { id: "2", src: "/assets/img/bg-img/bg6.jpg" },
    // { id: "3", src: "/assets/img/bg-img/bg7.jpg" }
  ];

}
