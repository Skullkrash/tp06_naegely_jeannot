import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserLoginResponse } from '../../models/user-login-response';
import { Objekt } from '../../models/objekts';
import { environment } from '../../environments/environments';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public loginUser(login: string, password: string): Observable<UserLoginResponse> {
    let data: String;
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    data = 'login=' + login + '&password=' + password;
    return this.http.post<UserLoginResponse>(
      environment.backendLoginClient,
      data,
      httpOptions
    );
  }

  public registerUser(login: string, password: string, passwordConfirmation: string): Observable<string> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    let data: string = 'login=' + login + '&password=' + password + '&passwordConfirmation=' + passwordConfirmation;
    return this.http.post<string>(
      environment.backendRegisterClient,
      data,
      httpOptions
    );
  }

  public updateUserLogin(login: string, newLogin: string): Observable<string> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    let data: string = 'login=' + login + '&newLogin=' + newLogin;
    return this.http.post<string>(
      environment.backendUpdateLogin,
      data,
      httpOptions
    );
  }

  public updateUserPassword(login: string, newPassword: string, newPasswordConfirmation: string): Observable<string> {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };
    let data: string = 'login=' + login + '&newPassword=' + newPassword + '&newPasswordConfirmation=' + newPasswordConfirmation;
    return this.http.post<string>(
      environment.backendUpdatePassword,
      data,
      httpOptions
    );
  }

  public getCatalogue(): Observable<Objekt[]> {
    return this.http.get<Objekt[]>(environment.backendCatalogue);
  }
}
