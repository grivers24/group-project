import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  hidden: boolean;

  constructor() { this.hidden = true; }

  hide() { this.hidden = true; }

  show() { this.hidden = false; }

  toggle() { this.hidden = !this.hidden; }




}
