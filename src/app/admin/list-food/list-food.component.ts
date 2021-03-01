import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';


@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
  foods$;
  constructor(private foodservice: FoodService) { 

    this.foods$ = this.foodservice.getAllFoods();
  }

  /* remove(id){
    if(confirm('Are you sure you want to delete this product?')){
      this.foodservice.delete(id);
    }
  } */

  deleteItem(food){
    console.log(food)
    this.foodservice.deleteItem(food);
  }

  ngOnInit(): void {
  }

}
