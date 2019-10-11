import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router, Route } from '@angular/router'
import { cart } from '../sneaker.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }
  
sneakers: any[] = cart;
sum: number = 0;



  ngOnInit() {
 
    console.log(this.sneakers);
    
  }

  getSum() {
    for(let i in this.sneakers){
      this.sum+=this.sneakers[i].price;
    }
    return this.sum
  }

  getTax(){
    return (.06 * this.sum) ;

  }

  getTotal(){
    return (this.getSum() + this.getTax())/2;
  }

  submit(){
    alert("Thank you! Your order will be processed");
    this.router.navigate(["../inventory"], {relativeTo: this.route, queryParamsHandling: "preserve"})
    this.sneakers = [];
  }
}
