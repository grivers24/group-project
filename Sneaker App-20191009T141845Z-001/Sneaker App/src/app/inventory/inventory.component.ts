import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from "@angular/router";
import {  ViewChild, ElementRef } from '@angular/core';
import {SneakerService} from '../sneaker.service';
import { Subscriber } from 'rxjs'; 
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {
  sneakers: any[]=[];
  username: string;
  paramsSubscrition: Subscription;
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
   
  } 

  viewCart(){
    this.router.navigate(["cart"], { queryParamsHandling: "preserve"})
   
  }
  ngOnDestroy() {
    this.paramsSubscrition.unsubscribe();
  }

}
