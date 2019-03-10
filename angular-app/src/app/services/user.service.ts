import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'John',
        lastName: 'Smith',
        email: 'john@gmail.com',
        // age: 70,
        // address: {
        //   street: '50 Main st',
        //   city: 'Boston',
        //   state: 'MA'
        // },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Johnson',
        email: 'kevin@gmail.com',
        // age: 34,
        // address: {
        //   street: '20 School st',
        //   city: 'Lynn',
        //   state: 'MA'
        // },
        isActive: false,
        registered: new Date('01/02/2019 10:20:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Williams',
        email: 'karen@gmail.com',
        // age: 26,
        // address: {
        //   street: '55 Mill st',
        //   city: 'Miami',
        //   state: 'FL'
        // },
        isActive: true,
        registered: new Date('11/02/2016 09:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  addUser(newUser: User): void {
    this.users.unshift(newUser);
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }
}
