import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit, OnDestroy {

  username: string;
  paramsSubscrition: Subscription;
  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }


  ngOnInit() {

    this.username = this.route.snapshot.params['username']
    console.log(this.username);
    this.paramsSubscrition = this.route.params.subscribe((params: Params)=>{
      this.username = params['username'];
    })

    // this.usersService.show()
    
  }

  viewCart(){
    this.router.navigate(["cart"], { queryParamsHandling: "preserve"})
  }
  ngOnDestroy() {
    this.paramsSubscrition.unsubscribe();
  }

}
