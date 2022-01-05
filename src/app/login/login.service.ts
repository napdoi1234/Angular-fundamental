import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { Login } from './login';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class LoginService {
  loginUrl = 'https://60dff0ba6b689e001788c858.mockapi.io/tokens';  // URL to web api

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<Login> {
    return this.http.post<Login>(this.loginUrl, { email, password })
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', user.token);
          localStorage.setItem('userId', user.userId);
        }

        return user;
      }));
  }
}