import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userid!: number;
  user!: User;
  id!:number;
  form!: FormGroup;
  constructor(
    public userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['userid'];
    console.log(this.userid);
this.userService.find(this.userid).subscribe((data: User)=>{
  console.log(data);
  this.user = data;
});

this.form = new FormGroup({
  userid: new FormControl('', [Validators.required]),
  username: new FormControl('', [Validators.required]),
  email: new FormControl('', Validators.required),
  password: new FormControl('', Validators.required),
  confirmpassword: new FormControl('', Validators.required),
 // usertype: new FormControl('', Validators.required)
});
  }
  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.userService.update(this.userid, this.form.value).subscribe((res:any) => {
      alert('user updated successfully!');
         console.log('User updated successfully!');
         this.router.navigateByUrl('/customerDashboard');
    })
  }
}
