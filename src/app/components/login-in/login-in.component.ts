import { Component } from '@angular/core';

@Component({
  selector: 'app-login-in',
  standalone: true,
  imports: [],
  templateUrl: './login-in.component.html',
  styleUrl: './login-in.component.css'
})
export class LoginInComponent {
  email: string = 'email@example.com';
  password: string = 'password';
  
}