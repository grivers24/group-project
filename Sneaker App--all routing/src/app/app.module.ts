import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './users.service';
import {FormsModule} from '@angular/forms';
import { GuestSignInComponent } from './guestSignIn/guestsignin.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { InventoryComponent } from './inventory/inventory.component'


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    GuestSignInComponent,
    UserloginComponent,
    ErrorPageComponent,
    CartComponent,
    CheckoutComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
