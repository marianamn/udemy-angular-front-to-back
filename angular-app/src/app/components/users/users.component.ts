import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  users: User[];
  newUser: User = {
    firstName: '',
    lastName: '',
    email: '',
    // age: null,
    // address: {
    //   street: '',
    //   city: '',
    //   state: ''
    // }
  };
  showExtended = true;
  loaded = false;
  enableAdd = false;
  showUserForm = false;
  @ViewChild('newUserForm') form: any;
  currentClasses = {};
  currentStyles = {};

  constructor() { }

  ngOnInit() {
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

    this.loaded = true;
  }

  addUser(newUser: User): void {
    newUser.isActive = true;
    newUser.registered = new Date();
    newUser.hide = true;

    this.users.unshift(newUser);

    this.form.reset();
  }

  onSubmit({ value, valid}: { value: User, valid: boolean }) {
    if (!valid) {
      console.log('Form is invalid!');
    } else {
      this.addUser(value);
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

  setCurrentClasses(): void {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended,
    };
  }

  setCurrentStyles(): void {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px',
    };
  }
}
