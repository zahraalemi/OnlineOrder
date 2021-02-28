import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Categories } from '../shared/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private fs: AngularFirestore) { }
  getCategories(){
    return this.fs.collection<Categories>('categories')
    .valueChanges();
    }
  
}
