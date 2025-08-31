import { Component, Inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { ExternalUserDTO, UserDTO } from '../../Interfaces/UserDTO';
import { UserService } from '../../services/user.service';
import { ResultViewModel } from '../../Interfaces/ResultViewModel';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  // providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  UserList: ExternalUserDTO[] = [];

  constructor(private _UserService: UserService) { }

  ngOnInit() {
    this.GetUsers();
  }

  GetUsers() {
    this._UserService.GetALLUser().subscribe((res: ResultViewModel<ExternalUserDTO[]>) => {
      if (res.isSuccess && res.data) {
        this.UserList = res.data;
      } else {
        alert(res.exception || 'Error while fetching users');
      }
    });
  }

  deleteUser(userId: string) {
    this._UserService.DeleteUser(userId).subscribe(res => {
      this.GetUsers();
    });
  }

}
