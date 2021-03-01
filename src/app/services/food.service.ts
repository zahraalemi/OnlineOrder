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
      console.log(food.id);
      this.foodDoc = this.fs.doc(`Food/${food.id}`);
      this.foodDoc.delete();
    }

    updateItem(food: Food){
      this.foodDoc = this.fs.doc(`items/${food.id}`);
      this.foodDoc.update(food);
    }

   create(food: Food) { 
    /* this.fs.collection("Food").doc().set(product); */
    this.foodsCollection.add(food);

  }

  /* getAllFoods(){
    return this.fs.collection<Food>('Food')
    .valueChanges();
    } */
  
  get(id) { 
    return this.fs.collection("Food").doc(id);
  }

  update(id, food) { 
    /* return this.fs.collection('/Food/' + id).snapshotChanges(food); */
    this.foodDoc = this.fs.doc(`Food/${food.id}`);
      this.foodDoc.update(food);
  }

  delete(id) { 
    return this.fs.collection("Food").doc(id).delete();
  }
 


 /*  getAll(): AngularFirestoreCollection<Tutorial> {
    return this.tutorialsRef;
  }

  create(tutorial: Tutorial): any {
    return this.tutorialsRef.add({ ...tutorial });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  } */


/*   getAll() {
    this.fs.collection("Food").doc();
  }
 
  

  update(productId, product) { 
    return this.db.object('/Food/' + productId).update(product);
  }

  delete(productId) { 
    return this.db.object('/Food/' + productId).remove();
  } */
}