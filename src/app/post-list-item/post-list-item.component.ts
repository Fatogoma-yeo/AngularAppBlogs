import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at = new Date();
  @Input() index: number;

  
  constructor(private postService: PostService) { }

  ngOnInit() {
    
  }

  onLoveIt(){
    this.postService.switchLoveIt(this.index);
  }
  onLoveDown(){
    this.postService.switchLoveDown(this.index);
  }
  getLoveEtat(){
     return this.postService.onswitch(this.index) ;
  }

  onDelete(){
    this.postService.removePost(this.index);
  }

}
