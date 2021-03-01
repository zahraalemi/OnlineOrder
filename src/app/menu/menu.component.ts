import { Component, OnInit} from '@angular/core';
import { Food } from '../shared/food';
import { FoodService } from '../services/food.service';

import { Observable } from 'rxjs';
import { ShoppingCartService } from '../services/shopping-cart.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

    foods$: Observable<Food[]>;

    constructor(private fs:FoodService, private shopingcartService: ShoppingCartService){}
      ngOnInit(): void{
        this.foods$ = this.fs.getAllFoods();
      }

      addToCart(food: Food){
        let cartId = localStorage.getItem('cardtId');
        if(!cartId){
          this.shopingcartService.create();
        }
      }

    }

    
 
