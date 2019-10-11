import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { UsersService} from '../users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  username: string;
  paramsSubscrition: Subscription;
  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {

    this.username = this.route.snapshot.params['username']
    console.log(this.username);
    this.paramsSubscrition = this.route.params.subscribe((params: Params)=>{
      this.username = params['username'];
    })

    
  }

  ngOnDestroy() {
    this.paramsSubscrition.unsubscribe();
  }

}
