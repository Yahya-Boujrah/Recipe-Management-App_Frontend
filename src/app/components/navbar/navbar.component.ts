import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginInComponent } from '../login-in/login-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, LoginInComponent, SignUpComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: []
})


export class NavbarComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private loginService = inject(LoginService);
  private authToken!: string;
  activeLink: string = 'home';

  get tokenExist() {
    return sessionStorage.getItem('token') == undefined ? true : false;
  }

  home(): void {
    this.activeLink = 'home';
    this.router.navigate(['']);
  }

  aboutUs(): void {
    this.activeLink = 'aboutUs';
    this.router.navigate(['about-us'], { relativeTo: this.route });
  }

  allRecipes(): void {
    this.activeLink = 'allRecipes';
    this.router.navigate(['all-recipes'], { relativeTo: this.route });


  }
  addRecipe(): void {
    console.log("efwelfnlowehfoiwildf");

    console.log(this.tokenExist);
    if (!this.tokenExist) {
      this.activeLink = 'addRecipe';
      this.router.navigate(['add-recipe'], { relativeTo: this.route });
    }else{
      console.log("efwelfnlowehfoiwildf");

      console.log(this.tokenExist);
      this.router.navigate(['login']);

    }

  }

  myRecipes(): void {
    console.log("efwelfnlowehfoiwildf");
    
    console.log(" token exist ",this.tokenExist);
    
    if (!this.tokenExist) {
      this.activeLink = 'myRecipes';
      this.router.navigate(['my-recipes'], { relativeTo: this.route });
    }else{
      this.router.navigate(['login']);
    }

  }

  login(form: NgForm): any {
    console.log(form);

    const email: string = form.value.email;
    const password: string = form.value.password;
    this.loginService.authenticate(email, password).subscribe(response => {
      if (response) {
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);
        // this.router.navigate([''], {relativeTo: this.route});

      } else {
        alert("Authentication failed");
      }
    }, error => {
      alert("Authentication failed");
    });

  }

  register(form: NgForm): any {
    const user: User = form.value;
    user.role = 'USER'
    return this.loginService.register(user).subscribe(response => {
      if (response) {
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);
        // this.router.navigate([''], {relativeTo: this.route});

      } else {
        alert("Authentication failed");
      }
    }, error => {
      alert("Authentication failed");
    })
  }

  logout() {
    console.log("token ", this.authToken);

    sessionStorage.removeItem('token');
    this.authToken = '';
    this.router.navigate(['']);
  }

}
