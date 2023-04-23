import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private http: HttpClient) { }

  getUserProfile(userId: string|null): Observable<any> {
    return this.http.get(`${AuthService.BASE_URL}/api/v1/users/${userId}/`);
  }
}
