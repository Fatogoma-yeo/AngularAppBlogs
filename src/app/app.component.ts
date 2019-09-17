import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   appareils = [
    { 
      
      title:'Mon premier post',
      content:'Lorem ipseim dolor sit amet, consectetur adipisicing eit,sed do elusmod tempor incididunt ut labore et dolore magna aliga. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: new Date()

    },
    { 
      title:'Mon deuxième post',
      content:'Lorem ipseim dolor sit amet, consectetur adipisicing eit,sed do elusmod tempor incididunt ut labore et dolore magna aliga. Ut enim ad minim veniam, quis',
      loveIts: 0,
      created_at: new Date()

    },
    { 
      title:'Encore un post',
      content:'Lorem ipseim dolor sit amet, consectetur adipisicing eit,sed do elusmod tempor incididunt ut labore et dolore magna aliga. Ut enim ad minim veniam, quis mostrud exercitation ullanco laboris nisi ut aliquip ex ea comodo.',
      loveIts: 0,
      created_at: new Date()

    }
  ];
  switchLoveIt(i: number){
    this.appareils[i].loveIts++;
  }
  switchLoveDown(i: number){
    this.appareils[i].loveIts--;

  }
  onswitch(i: number){
   return this.appareils[i].loveIts;
  }
 
}
