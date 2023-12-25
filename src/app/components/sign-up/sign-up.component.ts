import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  firstName: string = "yassmina";
  lastName: string = "hsaini";
  email: string = "email";
  password: string = "password";
}
