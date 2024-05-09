import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  IsLoggedIn: boolean = false;
  IsAdmin: boolean = false;
  user: any;
  IsCustomer: boolean = false;
  users: User[] = [];
  id?: any;
  userType: any = localStorage.getItem("role");

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.IsLoggedIn = localStorage.getItem('app_token') != null;
    var x = localStorage.getItem('app_token');
    if (x) {
      this.user = localStorage.getItem('role');
      this.id = localStorage.getItem('userId');
    }

    this.userService.getAll().subscribe((data: User[]) => {
      this.users = data;
      console.log(this.users);
    })

  }

  Logout() {
    localStorage.removeItem('app_token');
    localStorage.clear();
    location.href = '/login';
  }
}
