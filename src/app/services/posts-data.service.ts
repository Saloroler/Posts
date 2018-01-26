import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PostsDataService {

  constructor(
    public http: HttpClient
  ) { }


  getServ() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  addPost(post){
    return this.http.post('https://jsonplaceholder.typicode.com/posts', post);
  }
}
