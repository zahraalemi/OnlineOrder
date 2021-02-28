import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private userService: UserService, private authService: AuthService){
    this.authService.user$.subscribe(user =>{
      if(user){
        this.userService.save(user);
      }
    })

  }
}
