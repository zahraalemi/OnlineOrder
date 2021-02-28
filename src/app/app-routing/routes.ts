
import { Routes } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { AboutComponent } from './../about/about.component';
import { ContactComponent } from './../contact/contact.component';
import { MenuComponent } from './../menu/menu.component';
import { LoginComponent } from './../login/login.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { MyOrdersComponent } from '../my-orders/my-orders.component';
import { ProductFormComponent } from '../admin/product-form/product-form.component';


export const routes: Routes =[
    {path: 'home', component: HomeComponent},
    {path: 'menu', component: MenuComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
    {path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
    {path: 'admin/product-form', component: ProductFormComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];