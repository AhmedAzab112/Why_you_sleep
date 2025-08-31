import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from '../environments/environment';
import { Observable } from 'rxjs';
import { ResultViewModel } from '../Interfaces/ResultViewModel';
import { ExternalUserDTO } from '../Interfaces/UserDTO';


@Injectable({
  providedIn: 'root',
})
export class UserService {


  private readonly API_URL = `${env.API_URL}/UserMangement/User`; //https://localhost:7279/api/UserMangement/User

  constructor(private _HttpClient: HttpClient) { }

  //GetALLUser
  GetALLUser(): Observable<ResultViewModel<ExternalUserDTO[]>> {
    return this._HttpClient.get<ResultViewModel<ExternalUserDTO[]>>(this.API_URL + '/GetUsers');
  }


  GetUserBySesa(sesa: string): Observable<ResultViewModel<ExternalUserDTO>> {
    return this._HttpClient.get<ResultViewModel<ExternalUserDTO>>(this.API_URL + '/GetUserById/' + sesa);
  }

  //AddUser

  //UpdateUser

  //DeleteUser
  DeleteUser(sesa: string) {
    return this._HttpClient.delete(this.API_URL + '/DeleteUser/' + sesa);
  }
}





