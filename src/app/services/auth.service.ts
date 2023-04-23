import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoggedInUser, UserCredentials } from '../types/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public static BASE_URL: string="http://127.0.0.1:8000";
  constructor(private http: HttpClient) { }

  logIn(username: string, password: string): Observable <any>{
    return this.http.post(
      `${AuthService.BASE_URL}/api-user-login/`, { username, password }
      );
  }

  setLoggedInUser(userData: LoggedInUser): void {
    if (localStorage.getItem('userData') !== JSON.stringify(userData)) {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
   }


}
