import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  food$ =[];
  constructor(public authService: AuthService) { 
    if(localStorage.getItem('foodList')){
      this.food$ = JSON.parse(localStorage.getItem('foodList'));
      
  }
 
  }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logOutUser();
  }



}
