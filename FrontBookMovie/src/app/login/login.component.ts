import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  Email: string = 'Email';
  Password: string = 'pwd';
  decodedToken: { [key: string]: string; } | undefined;
  user: any;
  userId: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void { }
  Login(Email: string, PWD: string): any {
    var param = { email: Email, pwd: PWD };
    //console.log(param);

    this.http
      .get<any>('http://localhost:5055/api/Registrations/' + Email + '/' + PWD)
      .subscribe((data) => {

        console.log(data);
        this.decodeToken(data.token);
        console.log(this.user);
        
        if (data.token != null) {
          if (this.user == 'Admin') {
            window.location.href = '/adminDashboard';
            alert("Congrats! You’ve Successfully Logged In As Admin🥳🎉");
          }
           else {
            window.location.href = '/customerDashboard';
            alert("Congrats! You’ve Successfully Logged In🥳🎉");
          }
        }

        

        // localStorage.setItem('User', JSON.stringify(data));
        //console.log(data.userName=='Admin');return;

      })

    return false;
  }

  public decodeToken(token: any) {
    localStorage.setItem('app_token', token);
    this.decodedToken = jwtDecode(token);
    console.log(this.decodeToken);
    this.user = this.decodedToken ? this.decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] : undefined;
    this.userId = this.decodedToken ? this.decodedToken['UserId'] : undefined;
    localStorage.setItem('role', this.user);
    localStorage.setItem('userId', this.userId);
  }
}
function go(arg0: string) {
  throw new Error('Function not implemented.');
}
