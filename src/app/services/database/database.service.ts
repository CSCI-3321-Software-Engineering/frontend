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

  getCourses(username: String): Observable<any> {
    return this.http.post<any>(`${environment.serverUrl}/courses`, {
      user: username
    })
  }
}
