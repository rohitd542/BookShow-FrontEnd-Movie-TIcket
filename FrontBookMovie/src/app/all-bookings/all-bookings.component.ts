import { Component, OnInit } from '@angular/core';
import { TicketService } from '../ticket.service';
import { Ticket } from '../ticket';
@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {
tickets:Ticket[]=[];
  constructor(
    public ticketService:TicketService
  ) { }

  ngOnInit(): void {
  
      this.ticketService.getAll().subscribe((ticket: Ticket[])=>{
        this.tickets = ticket;
        console.log(this.tickets);
      })  
    
  }

}
