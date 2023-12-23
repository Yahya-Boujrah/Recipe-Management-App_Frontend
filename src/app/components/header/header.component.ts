import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  animations:[],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  pictures: { id: string, src: string }[] = [
    { id: "1", src: "/assets/img/bg-img/bg1.jpg" },
    // { id: "2", src: "/assets/img/bg-img/bg6.jpg" },
    // { id: "3", src: "/assets/img/bg-img/bg7.jpg" }
  ];

}
