import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { Food } from '../shared/food';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private fs:AngularFirestore) { }


  getAllFoods(){
    return this.fs.collection<Food>('Food')
    .valueChanges();
    }


   create(product) { 
    this.fs.collection("Food").doc().set(product);
  }
/*
  getAll() {
    return this.db.list('/Food');
  }
  
  get(productId) { 
    return this.db.object('/Food/' + productId);
  }

  update(productId, product) { 
    return this.db.object('/Food/' + productId).update(product);
  }

  delete(productId) { 
    return this.db.object('/Food/' + productId).remove();
  } */
}