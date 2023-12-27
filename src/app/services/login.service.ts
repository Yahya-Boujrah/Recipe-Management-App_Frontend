import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AuthResponse } from '../interfaces/auth-response';
import { User } from '../interfaces/user';
import { Observable, tap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly URL : string = 'http://localhost:8080/api/auth';

  private http : HttpClient =  inject(HttpClient);


  authenticate(email : string, password : string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.URL}/authenticate`, { email : email, password : password},httpOptions)
    .pipe(tap(
      console.log
    ));
  }

  register(user : User) : Observable<AuthResponse> {
    console.log("register service " + user);

    user.id = this.generateUUID();
    return this.http.post<AuthResponse>(`${this.URL}/register` , user ,httpOptions)
    .pipe(tap(
      console.log
    ));
  }

  generateUUID(): string {
    return uuidv4();
  }
}
