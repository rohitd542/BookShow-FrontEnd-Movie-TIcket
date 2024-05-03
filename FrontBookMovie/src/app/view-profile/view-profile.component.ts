import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  userid!: number;
  user!: User;
  id!:number;

  constructor( 
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];
        console.log(this.userid);
    this.userService.find(this.userid).subscribe((data: User)=>{
      console.log(data);
      this.user = data;
    });
  }

}

