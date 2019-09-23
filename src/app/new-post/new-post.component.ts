import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { Post } from '../model/post.model';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {


  postForm: FormGroup;
  constructor(private postService: PostService,
              private formBuilder: FormBuilder,
              private router: Router){}

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.postForm=this.formBuilder.group({
      title :'',
      content: ''
    });
  }
  onSubmitForm(){
    const title = this.postForm.get('title').value;
    const content = this.postForm.get('content').value;
    const newPost = new Post(title,content,0);
    this.postService.addNewPost(newPost);
    this.router.navigate(['/post']);
  }
}
