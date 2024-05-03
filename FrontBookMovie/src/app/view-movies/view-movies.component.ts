import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-view-movies',
  templateUrl: './view-movies.component.html',
  styleUrls: ['./view-movies.component.css']
})
export class ViewMoviesComponent implements OnInit {
FindTickets:any;
data!:Data;
searchForm;
  constructor(private dataService: DataService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
    ) { 
      this.searchForm = this.formBuilder.group({
        search: '',
      });
    }

  ngOnInit(): void {
    this.dataService.sendGetRequest().subscribe((data: any)=>{
      console.log(data);
      this.FindTickets = data;
    })
  }

}
