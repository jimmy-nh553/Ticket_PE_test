import { Injectable } from '@angular/core';
import { API } from '../../../../core/constants/API';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginWorkers } from '../../models/login-workers.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlBase: string = `${API.url}/auth`;

  constructor( private _http: HttpClient) { }

  customersLogin(user: LoginWorkers) {          
    const url: string = `${this.urlBase}/workers/sign-in`;
    return this._http.post<HttpResponse<string>>(url, user, { withCredentials: true, observe: 'response', responseType: 'text' as 'json' })
  }  
  
  workersLogin(user: LoginWorkers) {          
    const url: string = `${this.urlBase}/workers/sign-in`;
    return this._http.post<HttpResponse<string>>(url, user, { withCredentials: true, observe: 'response', responseType: 'text' as 'json' })
  }  

  logout() {
    const url: string = `${this.urlBase}/logout`;
    return this._http.post<HttpResponse<string>>(url, null, { withCredentials: true, observe: 'response', responseType: 'text' as 'json' });
  }

  isLoggedIn(): Observable<HttpResponse<any>> {
    const url: string = `${this.urlBase}/is-logged`;
    return this._http.get<any>(url, { withCredentials: true, observe: 'response' });
  }
}
