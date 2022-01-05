import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Post } from '../post/post';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable()
export class PostDetailService {
  postUrl = 'https://jsonplaceholder.typicode.com/posts';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getPostDetail(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.postUrl}/${id}`, httpOptions)
  }
}