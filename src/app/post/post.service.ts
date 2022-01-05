import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Post } from './post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class PostService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('PostService');
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postUrl)
      .pipe(
        catchError(this.handleError('getPosts', []))
      );
  }
}