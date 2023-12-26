import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-in.component.html',
  styleUrl: './login-in.component.css'
})
export class LoginInComponent {

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
    
      }else{
        alert("Authentication failed");
      }
    }, error => {
       alert("Authentication failed");
    });

  }
  
}