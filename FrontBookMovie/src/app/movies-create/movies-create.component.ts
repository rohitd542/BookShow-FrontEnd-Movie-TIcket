import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import {Data} from '../data';
@Component({
  selector: 'app-movies-create',
  templateUrl: './movies-create.component.html',
  styleUrls: ['./movies-create.component.css']
})
export class MoviesCreateComponent implements OnInit {
  form!: FormGroup;
  data!:Data;
  constructor(
    public dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      location: new FormControl('', Validators.required),
      theatrename: new FormControl('', Validators.required),
      moviename:new FormControl('', Validators.required),
      movieLink: new FormControl('', Validators.required),
      slot: new FormControl('', Validators.required),
      charges:new FormControl('', Validators.required),
     date: new FormControl('', Validators.required),
    });
  }
  get f(){ 
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
   
    this.dataService.create(this.form.value).subscribe((res:any) => {
      alert("Movie Details Are Added Successfully..! 🍿");
      console.log('Post Created Successfully!');
      //this.form.reset();
       this.router.navigateByUrl('/movieIndex');
  })
  }
}
