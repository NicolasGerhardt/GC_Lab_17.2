import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RedditList } from './interfaces/reddit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiUrl = 'https://www.reddit.com/r/aww/.json';

  constructor(private http:HttpClient) { }

  getPostList():Observable<RedditList> {
    return this.http.get<RedditList>(this.apiUrl);
  }
}
