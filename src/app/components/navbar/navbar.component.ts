import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: []
})
export class NavbarComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);


  home() : void{
    this.router.navigate(['']);
  }

  aboutUs() : void {  
    this.router.navigate(['about-us'],{relativeTo: this.route});
  }

  allRecipes() : void {
    this.router.navigate(['all-recipes'],{relativeTo: this.route});

  }
  
}
