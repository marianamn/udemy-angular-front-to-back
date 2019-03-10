import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

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
    email: ''
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
  data: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.data = this.userService.getData().subscribe(data => console.log(data));
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
  }

  addUser(newUser: User): void {
    newUser.isActive = true;
    newUser.registered = new Date();
    newUser.hide = true;

    this.userService.addUser(newUser);

    this.form.reset();
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
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
      'big-text': this.showExtended
    };
  }

  setCurrentStyles(): void {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    };
  }
}
