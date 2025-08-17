import { Component } from '@angular/core';
import { UserDTO } from '../Interfaces/UserDTO';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  UserList: UserDTO[] = [];

  constructor() {
    this.UserList = JSON.parse(localStorage.getItem('users') || '[]');
  }


  deleteUser(userId: number) {
    this.UserList = this.UserList.filter(user => user.id !== userId);
    localStorage.setItem('users', JSON.stringify(this.UserList));
  }

}
