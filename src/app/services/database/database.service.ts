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

  getLogs() {
    return this.http.get<any>(`${environment.serverUrl}/api/logs`);
  }

  addCourseToCart(course_name: String, username: String) {
    console.log("calling service")
    return this.http.post<any>(`${environment.serverUrl}/api/addtocart`, {
      course_name: course_name,
      username: username
    })
  }

  searchCourses(tags: String[]): Observable<any> {
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

  getSemesterCourses(term: string, username: String, registering: Boolean): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getsemestercourses`, {
      term: term.replace(/ /g, ''),
      user: username,
      registration: registering
    })
  }

  getCourse(name: String): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getcourse`, {
      courseName: name
    });
  }

  getSemesterCourse(term: string, name: String): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/api/getsemestercourse`, {
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
