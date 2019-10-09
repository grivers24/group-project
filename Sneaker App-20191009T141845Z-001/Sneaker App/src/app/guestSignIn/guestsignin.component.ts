import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router} from "@angular/router";
import { UsersService } from "../users.service";
import { NgForm } from "@angular/forms";


@Component({
  selector: 'guest-sign-in',
  templateUrl: './guestsignin.component.html',
  styleUrls: ['./guestsignin.component.css']
})
export class GuestSignInComponent implements OnInit {
  

  @ViewChild('g', {static: false}) signupForm: NgForm;
  @ViewChild('n', {static: false}) n:ElementRef;
 
  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService) { }

 
  ngOnInit() {
  }

  onSubmit(){
    let username: string = this.n.nativeElement.value;
    this.router.navigate([`inventory`], {relativeTo: this.route, queryParamsHandling: "preserve"})
    this.usersService.show();
    
  }
}
