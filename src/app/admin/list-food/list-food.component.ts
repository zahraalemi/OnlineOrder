import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { Food } from '../../shared/food';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
  foods$ : Food[];
  isActive:boolean = false;
  itemToEdit: Food;
  categories$ ;
  

  constructor(private foodservice: FoodService, private categoryService: CategoryService) { 
    this.categories$ = this.categoryService.getCategories();
    this.foodservice.getAllFoods().subscribe(items => {
      this.foods$ = items; 
    });
    
  }

  ngOnInit(): void {
    }

  deleteItem(food: Food){
    this.foodservice.deleteItem(food);
  }

  editItem(event, food: Food){
    this.isActive =true;
    this.itemToEdit = food;

    

  }
  updateItem(food: Food){
    this.foodservice.updateItem(food);
    this.clearState(); 
  }
  clearState(){
    this.isActive =false;
    this.itemToEdit = null;
  }
  

}
