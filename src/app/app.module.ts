import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { FoodService } from './services/food.service';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { CategoryService } from './services/category.service';
import { ShoppingCartService } from './services/shopping-cart.service';


import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ListFoodComponent } from './admin/list-food/list-food.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    MenuComponent,
    LoginComponent,
    ProductFormComponent,
    ListFoodComponent,
    ShoppingCartComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    CustomFormsModule,
    NgbModule
  ],
  providers: [
    FoodService,
    AuthService,
    UserService,
    CategoryService,
    ShoppingCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
