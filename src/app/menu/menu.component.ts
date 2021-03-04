import { Component, OnInit} from '@angular/core';
import { Food } from '../shared/food';
import { FoodService } from '../services/food.service';
import { LocalStorageService } from '../services/local-storage.service';
import { IAlert } from '../shared/IAlert';
import { Cart } from '../shared/cart';
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
    


    constructor(private fs:FoodService, private localstorageService: LocalStorageService, private sharedService: SharedService){
    }
      ngOnInit(): void{
        /* this.foods$ = this.fs.getAllFoods(); */
        this.fs.getAllFoods().subscribe(items => {
          this.foods$ = items; 
        });
      }
      
      

      addToCart(food: Food){
      
              
              this.productAddedTocart=this.localstorageService.getProductFromCart();
              if(this.productAddedTocart==null)
              {
                
                console.log('this.productAddedTocart==null')
                this.productAddedTocart=[];
                this.productAddedTocart.push(food);
                console.log(this.productAddedTocart)
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
                console.log('else this.productAddedTocart!==null')
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
                  //setTimeout(function(){ }, 2000);
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
              //console.log(this.cartItemCount);
              this.cartItemCount=this.productAddedTocart.length;
              // this.cartEvent.emit(this.cartItemCount);
              this.sharedService.updateCartCount(this.cartItemCount);
              console.log(this.sharedService);
            }
      
      public closeAlert(alert:any) {
          const index: number = this.alerts.indexOf(alert);
          this.alerts.splice(index, 1);
      }   

  }
 
