import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import'firebase/auth';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.authState.subscribe(user => {
      this.user = user;
    });
  }

  async loginWithGoogle(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        console.log('login Successful');
    }).catch(err => {
      console.log('Error with sign in', err)
    });
  }

  logOutUser(){
    this.fireAuth.signOut();
  }

  
}
