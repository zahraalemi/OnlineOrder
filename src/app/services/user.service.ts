import { Injectable } from '@angular/core';
import { User } from '../shared/user'
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fs:AngularFirestore) { }
  save(user: User){
    this.fs.collection('/users/' + user.uid).add({
      name: user.displayName,
      email: user.email
    })
  }
}
