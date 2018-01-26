import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// import component
import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
//import service

import { PostsDataService} from "./services/posts-data.service";


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
