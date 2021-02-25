import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database'
import { Observable } from 'rxjs';
import { Food } from '../shared/food';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private db: AngularFireDatabase, private fs:AngularFirestore) { }


  getAllFoods(amount:number):Observable<Food[]>{
    return this.fs
    .collection<Food>('Food',
    ref => ref.limit(amount))
    .valueChanges();
    }


  /* create(product) { 
    return this.db.list('/Food').push(product);
  }

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