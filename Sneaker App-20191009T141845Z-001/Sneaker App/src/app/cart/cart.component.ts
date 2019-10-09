import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { UsersService } from "../users.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @ViewChild('f', {static: false}) checkoutForm: NgForm;

  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
    // this.usersService.show();
  }


  onSubmit(){
    this.router.navigate(['checkout'], { queryParamsHandling: "preserve"})
    
  }

}
