import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from './model/post.model';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {


  postSubject= new Subject <Post[]>();

   Posts: Post [] =[];

  emitPost(){
    this.postSubject.next(this.Posts);
  }
  
  savePost(){
    firebase.database().ref('/Posts').set(this.Posts);
  }

  getPost(){
    firebase.database().ref('/Posts')
    .on("value",(data) =>{
      this.Posts = data.val() ? this.Posts = data.val() : [];
      this.emitPost();
    })
  }

  switchLoveIt(i: number){
    this.Posts[i].loveIts++;
    this.emitPost();
  }
  switchLoveDown(i: number){
    this.Posts[i].loveIts--;
    this.emitPost();
  }
  onswitch(i: number){
   return this.Posts[i].loveIts;
  }
 
  removePost(i: number){
    const postIndexToRemove = this.Posts.findIndex(
      (postEl) =>{
        if(postEl===this.Posts[i]){
          return true;
        }
      }
    );
    this.Posts.splice(postIndexToRemove, 1);
    this.savePost();
    this.emitPost();
  }

  addNewPost(newPost: Post){
    this.Posts.push(newPost);
    this.savePost();
    this.emitPost();
  }
}
