import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InventoryComponent } from './inventory/inventory.component';
import { UserComponent} from './user/user.component';
import { ErrorPageComponent} from './error-page/error-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'cart', component: CartComponent},
  {path: 'checkout', component: CheckoutComponent}, 
  {path: 'not-found', component: ErrorPageComponent, data: {customMessage: 'Looks like this page could not be found'}},
  {path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
