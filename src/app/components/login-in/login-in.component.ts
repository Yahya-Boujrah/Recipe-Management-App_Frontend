import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-in.component.html',
  styleUrl: './login-in.component.css'
})
export class LoginInComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);

  private loginService = inject(LoginService);
  private authToken!: string;

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

  signup() : void {
    this.router.navigate(['signup']);
  }
  

  // validation / single recipe post (state pour passer l objet entre les components b routing) / sign in - sign up (switch) /  button login to logout / about us text 
}