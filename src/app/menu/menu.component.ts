import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from '../shared/food';
import { FoodService } from '../services/food.service';

import { Observable } from 'rxjs';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

 /*  foods: Food[] = [];
  filteredFood: Food[] = [];
  category: string;

  constructor(
    route: ActivatedRoute,
    foodService: FoodService
  ) { */

    foods$: Observable<Food[]>;
    constructor(private fs:FoodService){}
      ngOnInit(): void{
        this.foods$ = this.fs.getAllFoods(4);
      }
    }

    /* 
     foodService
      .getAll()
      .switchMap(foods =>{
        this.foods = foods;
        return route.queryParamMap;
      })
      .subscribe(params => {
        this.category = params.get('category');
        
        this.filteredFood = (this.category) ? 
          this.foods.filter(p => p.category === this.category) : 
          this.foods;
      }); */
 
