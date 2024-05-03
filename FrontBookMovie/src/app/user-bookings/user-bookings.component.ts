import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit {
// ticket :Ticket[]=[];
ticket:Ticket[]=[];
userid!: number;
  user!: User;
  id!:number;
  constructor(
    
    public userService: UserService,
    private ticketService:TicketService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const user:any = localStorage.getItem('userId');
    
   this.ticketService.find(user).subscribe((data: Ticket[])=>{
   console.log(data);
   this.ticket = data;
   console.log(this.ticket);
});
    // var x = localStorage.getItem("userid");
    // console.log(x);
    // if(x){
    //   this.ticketService.getAll().subscribe((data: Ticket[])=>{
    //     this.ticket = data;
    //     console.log(this.ticket);
    //   })  
    // }
  }

}
