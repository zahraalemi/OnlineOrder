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
    numberfood : any ={};
    x=1;
    newData : any = {};
    isActive: boolean =false;
    cart2 = [];
    quantity$ : any = {};
    allFood = [];
    
    


    constructor(private fs:FoodService){
    }
      ngOnInit(): void{
        this.foods$ = this.fs.getAllFoods();
        this.quantity$ = this.allFood = JSON.parse(localStorage.getItem('foodList'));

      }

      addToCart(food: Food){
        this.isActive=true;
        if(localStorage.getItem('foodList') !== null){
          this.allFood = JSON.parse(localStorage.getItem('foodList'));
          for(let i=0; i< this.allFood.length; i++){
            if (food.id !== this.allFood[i].details.id){
              console.log('if')
              this.numberfood = {
                details :food, 
                quantity : this.x
              }
              
              this.cart.push(this.numberfood);
              localStorage.setItem('foodList', JSON.stringify(this.cart));
              }
              else{
                console.log('else')
                console.log(this.allFood[i].quantity)
              this.newData = {
                details : this.allFood[i].details, 
                quantity : this.allFood[i].quantity + 1,
              }
              console.log(this.newData);
              localStorage.clear();
              this.allFood.splice(i, 1);
              console.log('ghabl az push');
              console.log(this.allFood);
              this.allFood.push(this.newData);
              console.log('bad az push');
              console.log(this.allFood);
              localStorage.setItem('foodList', JSON.stringify(this.allFood));
            }
            
          }
          

        }
        else{
          console.log('null')
          this.numberfood = {
            details :food, 
            quantity : this.x
          }
          
          this.cart.push(this.numberfood);
          localStorage.setItem('foodList', JSON.stringify(this.cart));
        }

        

        

          
          /* this.cart2.push(this.numberfood);
          localStorage.setItem('foodnumber', JSON.stringify(this.cart2)); */

        
        
      }
        

      

    

  }
 
