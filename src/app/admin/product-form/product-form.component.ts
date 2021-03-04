import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FoodService } from 'src/app/services/food.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$ ;
  isActive = true;
  food :any = {};
  id;
  Qt: number = 1;

  constructor(
    private router: Router,
    private route:ActivatedRoute,
    private categoryService: CategoryService, 
    private foodService: FoodService) { 
    
    this.categories$ = this.categoryService.getCategories();
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) this.foodService.get(this.id).valueChanges(f =>this.food = f);
    
  }
  save(food){
    /* console.log(this.id + 'id')
    if(this.id) this.foodService.update(this.id,food); */
    this.foodService.create(food);
    this.router.navigate(['/admin/list-food']);
  }

  ngOnInit(): void {

    
  }

}
