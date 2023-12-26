import { Component, inject } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import { User } from '../../interfaces/user';
import { LoginService } from '../../services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  private loginService = inject(LoginService)
  private authToken !: string;

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

  login() : void {
    this.router.navigate(['login']);
  }
}
