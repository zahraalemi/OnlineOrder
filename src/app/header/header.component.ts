import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import firebase from 'firebase/app';
import'firebase/auth';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:firebase.User;
  constructor(private authService: AuthService, private fireAuth: AngularFireAuth) { 
    this.fireAuth.authState.subscribe(user =>{
      this.user = user;
    })
  }

  ngOnInit(): void {
  }
  logout(){
    this.authService.logOutUser();
  }

}
