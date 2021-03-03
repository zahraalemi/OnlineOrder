
import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { AboutComponent } from './../about/about.component';
import { ContactComponent } from './../contact/contact.component';
import { MenuComponent } from './../menu/menu.component';
import { LoginComponent } from './../login/login.component';
import { ProductFormComponent } from '../admin/product-form/product-form.component';
import { ListFoodComponent } from '../admin/list-food/list-food.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';


export const routes: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent},
    

    
    {path: 'admin/product-form/new', component: ProductFormComponent},
    {path: 'admin/product-form/:id', component: ProductFormComponent},
    {path: 'admin/product-form', component: ProductFormComponent},
    {path: 'admin/list-food', component: ListFoodComponent},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];