import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { UsersService } from "../users.service";
import { NgForm } from "@angular/forms";
import { cart } from '../sneaker.service';
  
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('f', {static: false}) checkoutForm: NgForm;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }
  sneakers: any = cart
  ngOnInit() {
    // this.usersService.show();
    console.log(cart);
  }

  onRemove(i){
    this.sneakers.splice(i, 1);
  }

  onSubmit(){
    this.router.navigate(['checkout'], { queryParamsHandling: "preserve"})
    
  }

}
