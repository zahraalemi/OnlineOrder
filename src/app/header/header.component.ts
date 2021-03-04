import { Component } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  cartItemCount:number=0;
  productAddedTocart;
  constructor(private localstorageService: LocalStorageService) {
 
  }

  ngOnInit(): void {
        this.productAddedTocart = this.localstorageService.getProductFromCart();
        this.cartItemCount = this.productAddedTocart.length;
  }





}
