import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
<<<<<<< HEAD
import { CartComponent } from './components/cart/cart.component';
=======
import { CheckoutComponent } from './checkout/checkout.component';
>>>>>>> 5d592b156e3bad898b72af64d5e44d85f8e8767b

const routes: Routes = [
  {path: '', component: HomeComponent} ,
  {path: 'home', component: HomeComponent},
<<<<<<< HEAD
  {path: 'polo/:id', component: DetailsComponent},
  {path:'cart', component: CartComponent}  
=======
  {path: 'polo/:id', component: DetailsComponent},  
  {path: 'checkout', component: CheckoutComponent},  

>>>>>>> 5d592b156e3bad898b72af64d5e44d85f8e8767b
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
