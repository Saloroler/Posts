import { Component } from '@angular/core';
import { PostsDataService } from "../../services/posts-data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  {

  posts:any;
  post = {
    title: '',
    body: ''
  }


  constructor(
    public postsService: PostsDataService
  ) { }

  getPosts() {
    this.postsService.getServ().subscribe( posts =>{
      console.log(posts)
      this.posts = posts;
    }, error => {
      console.log(error);
    } )
  }

  addPost(form){
    this.postsService.addPost(this.post).subscribe( post =>{
      console.log(post);
      this.posts.unshift(post);
      form.resetForm()
    }, error => {
      console.log(error);
    })
  }
  removePost(i){
    this.posts.splice(i, 1);
  }

}
