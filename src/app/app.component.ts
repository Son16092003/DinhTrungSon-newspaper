import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged, User } from '@firebase/auth';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'login';

  constructor(private auth: Auth, private authService: AuthService){

  }
  
  ngOnInit(){
    onAuthStateChanged(this.auth, (user) => {
      if (user){
        this.authService.currentUser = user;
      }else{
        this.authService.currentUser = null;
      }
    })
  }

  
  callback(){

  }
  

}
