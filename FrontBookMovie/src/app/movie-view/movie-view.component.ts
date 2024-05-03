import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../data';
@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css']
})
export class MovieViewComponent implements OnInit {

  id!: number;
  data!: Data;
  constructor(
    
    public dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['movieId'];
        
    this.dataService.find(this.id).subscribe((i: Data)=>{
      this.data = i;
    });
  }

}
