// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute,Router } from '@angular/router';
// import { TicketService } from '../ticket.service';
// import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { Ticket } from '../ticket';
// import { UserService } from '../user.service';
// import { DataService } from '../data.service';
// import { User } from '../user';
// import { Data } from '../data';
// @Component({
//   selector: 'app-book-ticket',
//   templateUrl: './book-ticket.component.html',
//   styleUrls: ['./book-ticket.component.css']
// })
// export class BookTicketComponent implements OnInit {
// form!:FormGroup;
// data!:Data;
// datas:Data[]=[];
// flag:boolean=false;
// // user!:User;
// // movieId!:number;
//   constructor(
//     public ticketService:TicketService,
//     private router :Router,
//     public dataService :DataService,
//     public userService:UserService,
//   ) { }

//   ngOnInit(): void {
//     this.form = new FormGroup({
//       seatnum : new FormControl('', [Validators.required]),
//       Movie: new FormControl('', [Validators.required]),
//       User: new FormControl('',[Validators.required]),
//       date: new FormControl('',[Validators.required])
//     });
//     this.dataService.getAll().subscribe((data: Data[])=>{
//       this.datas = data;
//       console.log(this.datas);
//     })
//   }

//   get f(){
//     return this.form.controls;
//   }
    
//   submit(){
//     console.log(this.form.value);

//     this.datas.forEach(x => {
//       if(x.movieId == this.form.value.Movie){
//         this.flag = true;
//         return;
//       }
//     });

//     if(!this.flag){
//       alert("Sorry, No movie exists with this id");
//       this.form.reset();
//     }

//     this.dataService.find(this.form.value.movieId).subscribe((data: Data)=>{
//       console.log(data);
//       this.data = data;
//     });


//     this.ticketService.create(this.form.value).subscribe((res:any) => {
//       alert("Your booking has been successful.");
//          console.log('ticket created successfully!');
//          this.router.navigateByUrl('/customerDashboard');
//     })
//   }
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TicketService } from '../ticket.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Ticket } from '../ticket';
import { UserService } from '../user.service';
import { DataService } from '../data.service';
import { User } from '../user';
import { Data } from '../data';
@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
form!:FormGroup;
data!:Data;
datas:Data[]=[];
flag:boolean=false;
// user!:User;
// movieId!:number;
  constructor(
    public ticketService:TicketService,
    private router :Router,
    public dataService :DataService,
    public userService:UserService,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      seatnum : new FormControl('', [Validators.required]),
      movieId: new FormControl('', [Validators.required]),
      userid: new FormControl('',[Validators.required]),
      date: new FormControl('',[Validators.required])
    });
    this.dataService.getAll().subscribe((data: Data[])=>{
      this.datas = data;
      console.log(this.datas);
    })
  }

  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);

    this.datas.forEach(x => {
      if(x.movieId == this.form.value.movieId){
        this.flag = true;
        return;
      }
    });

    if(!this.flag){
      alert("Sorry, No movie exists with this id");
      this.form.reset();
    }

    this.dataService.find(this.form.value.movieId).subscribe((data: Data)=>{
      console.log(data);
      this.data = data;
    });


    this.ticketService.create(this.form.value).subscribe((res:any) => {
      alert("Your booking has been successful.");
         console.log('ticket created successfully!');
         this.router.navigateByUrl('/customerDashboard');
    })
  }
}
