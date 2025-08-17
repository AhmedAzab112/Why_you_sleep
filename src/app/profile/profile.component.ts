import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { UserDTO } from '../Interfaces/UserDTO';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    FormsModule
  ],

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {
  userList: UserDTO[] = [];
  user: UserDTO = {
    id: -1,
    name: '',
    email: '',
    age: 0,
    location: ''
  };

  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.userList = JSON.parse(localStorage.getItem('users') || '[]');
    const existingId = this._ActivatedRoute.snapshot.params['Id'];
    if (Number.parseInt(existingId) > 0) {
      const existUser = this.userList.find(user => user.id === +existingId) || this.user;
      if (existUser && existUser.id) {
        this.user = existUser;
      }
    }
  }

  ngOnInit() { }
  ngOnDestroy() { }


  saveUser() {
    if (this.user.name.length == 0 ||
      this.user.email.length == 0 ||
      this.user.age <= 0 ||
      this.user.location.length == 0) {
      alert('Invalid user data');
      return;
    }


    if (this.user.id > 0) {
      const userIndex = this.userList.findIndex(user => user.id === this.user.id);
      if (userIndex != -1) {
        this.userList[userIndex] = this.user;
      }
    } else {
      this.user.id = this.userList.length + 1;
      this.userList.push(this.user);
    }

    localStorage.setItem('users', JSON.stringify(this.userList));
    this._Router.navigate(['/home']);
  }


}
