import {inject, Injectable, Signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {toSignal} from "@angular/core/rxjs-interop";
import {RedditResponse, RedditPost} from "../models/models"
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  private apiUrl = 'https://www.reddit.com/r/gifs/new/.json?limit=100';
  constructor() { }

  getRedditPosts(): Signal<RedditPost[] |undefined  > {
    return toSignal<RedditPost[] |undefined  >(this.http.get<RedditResponse>(this.apiUrl).pipe(
      map(response => response.data.children.map(child => child.data))
    ));
  }

}
