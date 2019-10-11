import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from "@angular/router";
import {  ViewChild, ElementRef } from '@angular/core';
import {SneakerService} from '../sneaker.service';
import { Subscriber } from 'rxjs'; 
import { CartComponent } from '../cart/cart.component';
import { cart } from '../sneaker.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {
  sneakers: any[]=[];
  username: string;
  paramsSubscrition: Subscription;
  total = [];
  remove= [];
  itemQuantity:number;
  a = 0;
  @ViewChild('SneakerName', {static: false}) sneakerName: ElementRef;
  constructor(private sneakerService: SneakerService , private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }


  ngOnInit() {

    this.username = this.route.snapshot.params['username']
    console.log(this.username);
    this.paramsSubscrition = this.route.params.subscribe((params: Params)=>{
      this.username = params['username'];
    })

    

    // this.usersService.show()
    
  }

  onGetSneakers(){
    this.sneakerService.getSneakers()
    .subscribe(
       (sneaker: any[])=> this.sneakers = sneaker,
       (error)=> console.log(error)
    );
   document.getElementsByTagName("section")[0].style.display="block";
   document.getElementsByTagName("section")[0].style.display="inline-flex";
  } 
   
  onAdd(i){
    let sneaker = this.sneakers[i];
    let q = Number([sneaker.quantity]);
    // let b = 1
    // this.a = b++;
    let y = Number([sneaker.price]);
    this.total.push(y);
    let r =this.total; 
    let sum = 0;
    for (i = 0; i < this.total.length; i++) {
     sum += r[i];
     document.getElementById("total").innerHTML = String(sum);


   }
 
   cart.push(sneaker)
   console.log(cart)

  if(sneaker.quantity > 0){
  sneaker.quantity -= 1;
   this.sneakerService.updateSneakers(i, sneaker)
   .subscribe(
    (res) => (console.log(res)),
    (err) => {console.log(err)}
);} else{
  alert("We're sorry! This product has been sold out.")
}

   }
 
 

  
  onRemove(i){
    
    let r =this.total;
    let x = this.sneakers;
    alert("Are you Sure you want to remove " + x[i].name + " " + x[i].type +"?" );
    let y = Number([x[i].price]);
    if(r.length === 1 && r.includes(y)){
      document.getElementById("total").innerHTML = "0 - Empty Cart";
      r.pop();
    }else if(r.length >= 1 && r.includes(y)){
    r.splice(r.indexOf(y), 1) 
    let sum = 0;
    for (i = 0; i < this.total.length; i++) {
     sum += r[i];
     document.getElementById("total").innerHTML = String(sum);

   }
   
  }  
    
  }
  viewCart(){
    this.router.navigate(["cart"], { queryParamsHandling: "preserve"})
   
  }
  ngOnDestroy() {
    this.paramsSubscrition.unsubscribe();
  }

}
