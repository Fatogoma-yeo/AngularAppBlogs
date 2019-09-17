import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
  @Input() index: number;


  constructor(private appComponent: AppComponent) { }

  ngOnInit() {
  }

  onLoveIt(){
    this.appComponent.switchLoveIt(this.index);
  }
  onLoveDown(){
    this.appComponent.switchLoveDown(this.index);
  }
  getLoveEtat(){
     return this.appComponent.onswitch(this.index) ;
  }

}
