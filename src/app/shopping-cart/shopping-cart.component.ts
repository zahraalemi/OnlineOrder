import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  food$=[];
  constructor() { 
    if(localStorage.getItem('foodList')){
      this.food$ = JSON.parse(localStorage.getItem('foodList'));
      console.log(this.food$)
  }
  }

  ngOnInit(): void {
  }

  clearStorage(){
    
    localStorage.clear();
    location.reload();
  }

}
