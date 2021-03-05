import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { Food } from '../shared/food';
import { IAlert } from '../shared/IAlert';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
dafualtQuantity:number=1;
  productAddedTocart:Food[];
  allTotal:number;
  isActive:boolean = false;
  qtNumber:boolean = false;


  public globalResponse: any;
  public alerts: Array<IAlert> = [];

  constructor(private localstorageService: LocalStorageService) { 
    
  }

  ngOnInit(): void {
    this.productAddedTocart=this.localstorageService.getProductFromCart();
   this.localstorageService.removeAllProductFromCart();
   this.localstorageService.addProductToCart(this.productAddedTocart);
   this.calculteAllTotal(this.productAddedTocart);

   if(this.productAddedTocart.length > 0){
     this.isActive =true;

   }
   
  }

  clearStorage(){
    localStorage.clear();
    location.reload()
  }
  onAddQuantity(food:Food)
  {
    this.productAddedTocart=this.localstorageService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==food.id).Quantity = food.Quantity+1;
    this.localstorageService.removeAllProductFromCart();
    this.localstorageService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
   
  }
  onRemoveQuantity(food:Food)
  {
    this.productAddedTocart=this.localstorageService.getProductFromCart();
    this.productAddedTocart.find(p=>p.id==food.id).Quantity = food.Quantity-1;
    this.localstorageService.removeAllProductFromCart();
    this.localstorageService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
    
  }
  
  calculteAllTotal(allItems:Food[])
  {
    let total=0;
    for (let i in allItems) {
      total= total+(allItems[i].Quantity *allItems[i].price);
   }
   this.allTotal=total;
  }



}
