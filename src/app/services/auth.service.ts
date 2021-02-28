import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import'firebase/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$:Observable<firebase.User>;

  constructor(private fireAuth: AngularFireAuth , private router: Router) {
      this.user$ = fireAuth.authState;
  }

  async loginWithGoogle(){
    await this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      res => {
        console.log('login Successful');
        this.router.navigate(['/menu']);
    }).catch(err => {
      console.log('Error with sign in', err)
    });
  }

  logOutUser(){
    this.fireAuth.signOut();
  }

  
}
