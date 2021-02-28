import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$ ;

  constructor(categoryService: CategoryService, private foodService: FoodService) { 
    this.categories$ = categoryService.getCategories();
  }
  save(product){
    
    this.foodService.create(product);
  }

  ngOnInit(): void {
  }

}
