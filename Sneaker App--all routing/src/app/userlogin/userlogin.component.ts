import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router'
import { UsersService } from "../users.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
   
  @ViewChild('u', {static: false}) loginForm: NgForm;
  @ViewChild('n', {static: false}) n:ElementRef;


  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    let username: string = this.n.nativeElement.value;
    this.router.navigate(["inventory"], {relativeTo: this.route, queryParamsHandling: "preserve"})
    this.usersService.show();
  }
}
