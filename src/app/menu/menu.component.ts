import { Component, OnInit} from '@angular/core';
import { Food } from '../shared/food';
import { FoodService } from '../services/food.service';
import { LocalStorageService } from '../services/local-storage.service';
import { IAlert } from '../shared/IAlert';
import { SharedService } from '../services/shared.service';





@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
    
    foods$: Food[];
    
    isActive: boolean =false;
    itemToEdit: Food;
    
   

    public alerts: Array<IAlert> = [];
    productAddedTocart:Food[];
    cartItemCount: number = 0;
    


    constructor(
      private fs:FoodService, 
      private localstorageService: LocalStorageService, 
      private sharedService: SharedService){
    }
      ngOnInit(): void{
        this.fs.getAllFoods().subscribe(items => {
        this.foods$ = items; 
        });
      }
      
      

      addToCart(food: Food){
        this.productAddedTocart=this.localstorageService.getProductFromCart();
        if(this.productAddedTocart==null)
        {
          
          this.productAddedTocart=[];
          this.productAddedTocart.push(food);
          this.localstorageService.addProductToCart(this.productAddedTocart);
          this.alerts.push({
            id: 1,
            type: 'success',
            message: 'Product added to cart.'
          });
          setTimeout(()=>{   
            this.closeAlert(this.alerts);
        }, 3000);

        }
        else
        {
          let tempProduct=this.productAddedTocart.find(p=>p.id==food.id);
          if(tempProduct==null)
          {
            this.productAddedTocart.push(food);
            this.localstorageService.addProductToCart(this.productAddedTocart);
            this.alerts.push({
              id: 1,
              type: 'success',
              message: 'Product added to cart.'
            });
            setTimeout(()=>{   
              this.closeAlert(this.alerts);
          }, 3000);
          }
          else
          {
            this.alerts.push({
              id: 2,
              type: 'warning',
              message: 'Product already exist in cart.'
            });
            setTimeout(()=>{   
              this.closeAlert(this.alerts);
          }, 3000);
          }
          
        }
        this.cartItemCount=this.productAddedTocart.length;
        this.sharedService.updateCartCount(this.cartItemCount);
        location.reload();
      }
      
      public closeAlert(alert:any) {
          const index: number = this.alerts.indexOf(alert);
          this.alerts.splice(index, 1);
      }   

  }
 
