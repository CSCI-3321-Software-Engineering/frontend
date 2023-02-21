import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  // function called Test that returns an observable of type any
  test(): Observable<any> {
    // use Observable to make HTTP requests
    return this.http.get(`${environment.serverUrl}/api`);
  }
}
