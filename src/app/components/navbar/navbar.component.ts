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
  imports: [RouterOutlet,LoginInComponent, SignUpComponent, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: []
})


export class NavbarComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private loginService = inject(LoginService);
  private authToken : string = '';


  get tokenExist (){

    return sessionStorage.getItem('token') == undefined ?true : false ;
  } 

  home() : void{
    this.router.navigate(['']);
  }

  aboutUs() : void {  
    this.router.navigate(['about-us'],{relativeTo: this.route});
  }

  allRecipes() : void {
    this.router.navigate(['all-recipes'],{relativeTo: this.route});

  }
  addRecipe() : void {
    this.router.navigate(['add-recipe'],{relativeTo: this.route});

  }

  myRecipes() : void {
    this.router.navigate(['my-recipes'],{relativeTo: this.route});
  }

  login(form : NgForm) : any{
    console.log(form);
    
    const email : string = form.value.email;
    const password : string = form.value.password;
    this.loginService.authenticate(email, password).subscribe(response =>{
      if (response) {
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);
        this.router.navigate([''], {relativeTo: this.route});
    
      }else{
        alert("Authentication failed");
      }
    }, error => {
       alert("Authentication failed");
    });

  }

  register(form : NgForm) : any{
    const user : User = form.value;
    user.role = 'USER'
    return this.loginService.register(user).subscribe(response =>{
      if (response) {
        this.authToken = response.token;
        sessionStorage.setItem('token', this.authToken);
        this.router.navigate([''], {relativeTo: this.route});
    
      }else{
        alert("Authentication failed");
      }
    }, error => {
       alert("Authentication failed");
    })
  }

  logout() {
    console.log("token ",this.authToken);
    
    sessionStorage.removeItem('token');
    this.authToken = '';
    this.router.navigate(['']);
  }
  
}
