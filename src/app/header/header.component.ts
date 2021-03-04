import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { SharedService } from '../services/shared.service';
import { LocalStorageService } from '../services/local-storage.service';
import { Food } from '../shared/food';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  food$ =[];
  cartItemCount:number=0;
  productAddedTocart;
  constructor(public authService: AuthService, private localstorageService: LocalStorageService) {
 
  }

  ngOnInit(): void {
/*     this.sharedService.currentMessage.subscribe(msg => this.cartItemCount = msg);
 */    this.productAddedTocart = this.localstorageService.getProductFromCart();
        this.cartItemCount = this.productAddedTocart.length;
  }

  logout(){
    this.authService.logOutUser();
  }



}
