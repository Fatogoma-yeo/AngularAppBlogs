import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  appareils: any[];
  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
    this.appareils=this.appComponent.appareils;
  }

}
