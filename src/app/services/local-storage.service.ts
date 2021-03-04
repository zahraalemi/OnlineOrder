import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }



addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }
  getProductFromCart() {
    return JSON.parse(localStorage.getItem('product'));
  }
  removeAllProductFromCart() {
    return localStorage.removeItem("product");
  }
}