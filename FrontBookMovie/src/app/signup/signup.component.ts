import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class signupComponent implements OnInit {
  form!: FormGroup;
  constructor(
    public userService: UserService,
    private router: Router
  ) { }
    

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmpassword: new FormControl('', Validators.required),
      usertype :new FormControl('',Validators.required)
    });
  }   
 
  get f(){
    return this.form.controls;
  }
    

  submit(){
    console.log(this.form.value);
    if(this.form.value.password != this.form.value.confirmpassword){
      alert("Password and Confirm Password must be same!");
    }
    this.userService.create(this.form.value).subscribe((res:any) => {
         console.log('Account signed successfully!');
         this.router.navigateByUrl('login');
    })
  }
}
