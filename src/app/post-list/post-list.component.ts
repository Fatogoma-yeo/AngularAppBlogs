import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';
import { Post } from '../model/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit,OnDestroy {

  Posts: Post [];
  postSubscription: Subscription;
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription=this.postService.postSubject.subscribe(
      (posts: any[]) =>{
        this.Posts=posts;
      }
    );
    this.postService.getPost();
    this.postService.emitPost();
  }
  
  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
