import { Component } from '@angular/core';
import { DatabaseService } from 'src/app/services/database/database.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public username: String;
  public email: String;
  public password: String;
  public id: String;
  constructor(
    private databaseConn: DatabaseService
  ) { 
    const obj = this.getUserInfo();
    this.username = obj.username;
    this.email = obj.email;
    this.password = obj.password;
    this.id = obj.id;
  }

  getUserInfo() { 



    // placeholder until we get endpoint up to date
    return {
      username: "apple",
      email: "banana",
      password: "strawberry",
      id: "rasberry"
    }

  } 

}
