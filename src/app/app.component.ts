import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
   constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyDHzAotYYVaKVvIdHrrHfiabAuaUdFhds0",
      authDomain: "posts-261d5.firebaseapp.com",
      databaseURL: "https://posts-261d5.firebaseio.com",
      projectId: "posts-261d5",
      storageBucket: "",
      messagingSenderId: "696728706565",
      appId: "1:696728706565:web:81ff674b7a82d1b6fa866c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

   }
}
