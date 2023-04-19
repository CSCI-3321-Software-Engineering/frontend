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

  searchCourses(tags: [String]): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/searchcourses`, {
      courseTags: tags
    })
  }

  getCourses(username: String, registering: Boolean): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getcourses`, {
      user: username,
      registration: registering
    })
  }

  getCourse(name: String): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getcourse`, {
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
