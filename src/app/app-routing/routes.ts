
import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { ContactComponent } from './../contact/contact.component';
import { MenuComponent } from './../menu/menu.component';
import { ProductFormComponent } from '../admin/product-form/product-form.component';
import { ListFoodComponent } from '../admin/list-food/list-food.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';


export const routes: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'shopping-cart', component: ShoppingCartComponent},
    {path: 'admin/product-form', component: ProductFormComponent},
    {path: 'admin/list-food', component: ListFoodComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];