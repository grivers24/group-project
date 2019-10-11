import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {


  constructor(private usersService: UsersService) { }

  ngOnDestroy(){
  
  }

  ngOnInit() {
    this.usersService.hide();

}
}