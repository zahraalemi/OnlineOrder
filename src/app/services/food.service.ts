import { Injectable } from '@angular/core';
import { Food } from '../shared/food';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodsCollection: AngularFirestoreCollection<Food>;
  foods: Observable<Food[]>;
  foodDoc: AngularFirestoreDocument<Food>;

  constructor(private fs:AngularFirestore) { 
    
  this.foodsCollection = this.fs.collection('Food', ref => ref.orderBy('title','asc'));

  this.foods = this.foodsCollection.snapshotChanges().pipe(map(changes => {
    return changes.map(a => {
      const data = a.payload.doc.data() as Food;
      data.id = a.payload.doc.id;
      return data;
    });
  }));
}

    getAllFoods(){
      return this.foods;
    }
  

  

    deleteItem(food: Food){
      
      this.foodDoc = this.fs.doc(`Food/${food.id}`);
      this.foodDoc.delete();
    }

    updateItem(food: Food){
      this.foodDoc = this.fs.doc(`Food/${food.id}`);
      this.foodDoc.update(food);
    }

   create(food: Food) { 
    this.foodsCollection.add(food);
  }

  
  
  get(id) { 
    return this.fs.collection("Food").doc(id);
  }

  update(id, food) { 
    this.foodDoc = this.fs.doc(`Food/${food.id}`);
      this.foodDoc.update(food);
  }

  delete(id) { 
    return this.fs.collection("Food").doc(id).delete();
  }
 
}