import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private http: HttpClient
  ) { }

  getCourses(term: string, username: String, registering: Boolean): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getcourses`, {
      term: term.replace(/ /g, ''),
      user: username,
      registration: registering
    })
  }

  getCourse(term: string, name: String): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getcourse`, {
      term: term.replace(/ /g, ''),
      courseName: name
    });
  }

  getUserInfo(username: String): Observable<any> {
    // should return a json object with all information about the user
    return this.http.post<any>(`${environment.serverUrl}/api/userinfo`, {
      user: username
    });
  }
}
