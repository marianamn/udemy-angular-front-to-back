import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user: User;

  hasKids: boolean;
  numberArray: number[];

  constructor() {
  }

  ngOnInit() {
    this.user =  {
      firstName: 'John',
      lastName: 'Smith',
      email: 'lohn@gmail.com',
      // age: 30,
      // address: {
      //   street: '50 Main st',
      //   city: 'Boston',
      //   state: 'MA'
      // }
    };
  }
}
