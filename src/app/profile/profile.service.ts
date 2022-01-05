import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { User } from './user';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class ProfileService {
  url = 'https://60dff0ba6b689e001788c858.mockapi.io/users/';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getProfile(userId: string): Observable<User> {
    return this.http.get<User>(this.url + userId);
  }
}