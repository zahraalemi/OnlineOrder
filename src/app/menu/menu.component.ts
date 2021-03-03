import { Component, OnInit} from '@angular/core';
import { Food } from '../shared/food';
import { FoodService } from '../services/food.service';

import { Observable } from 'rxjs';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
    
    foods$: Observable<Food[]>;
    cart = [];
    cart2 = [];
    numberfood : any ={};
    x=1;
    newData : any = {};
    isActive: boolean =false;
    itemToEdit: Food;
    allFood$ = [];
    
    


    constructor(private fs:FoodService){
    }
      ngOnInit(): void{
        this.foods$ = this.fs.getAllFoods();
        if(localStorage.getItem('foodNo')){
        this.allFood$ = JSON.parse(localStorage.getItem('foodNo'));
        
        }
        
        
        
      }
      
      

      addToCart(event, food: Food){
        this.isActive=true;
        this.itemToEdit = food;
        console.log(this.itemToEdit);

        this.cart.push(food);
        localStorage.setItem('foodList', JSON.stringify(this.cart));


        this.numberfood = {
          details : food,
          no : 1
        }
        this.cart2.push(this.numberfood);
        localStorage.setItem('foodNo', JSON.stringify(this.cart2));
        
      }


      plusCartQt(food){
        this.cart2= [];
        this.cart2 = JSON.parse(localStorage.getItem('foodNo'));
        console.log(this.cart2)
        /* for(let i=0; i< this.allFood$.length; i++) */
         for(let items of this.cart2){
          
          if (food.id == items.details.id){
            
              console.log('if')
              
            this.newData = {
              details : items.details, 
              no : items.no + 1
            }
            
            this.cart2.splice(items, 1);
            this.cart2.push(this.newData);
            localStorage.setItem('foodNo', JSON.stringify(this.cart2));
            
          }
        }
        

      
    }
    minusCartQt(){

    }
        

      

    

  }
 
