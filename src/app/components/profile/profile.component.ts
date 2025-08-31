import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExternalUserDTO, UserDTO } from '../../Interfaces/UserDTO';
import { UserService } from '../../services/user.service';

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
  user: ExternalUserDTO = {
    sesa: '',
    firstName: '',
    lastName: '',
    email: '',
  };


  constructor(
    private _Router: Router,
    private _ActivatedRoute: ActivatedRoute,
    private _UserService: UserService
  ) {
    const userSESA = this._ActivatedRoute.snapshot.params['Id'];
    if (userSESA.length > 0) {
      this.GetUserById(userSESA);
    }
  }

  ngOnInit() { }
  ngOnDestroy() { }


  GetUserById(userSESA: string) {
    this._UserService.GetUserBySesa(userSESA).subscribe(res => {
      if (res.isSuccess) {
        this.user = res.data;
      } else {
        alert('User not found');
      }
    });
  }


  saveUser() {

  }


}
