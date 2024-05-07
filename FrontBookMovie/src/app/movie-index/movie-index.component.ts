import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Data} from '../data';
@Component({
  selector: 'app-movie-index',
  templateUrl: './movie-index.component.html',
  styleUrls: ['./movie-index.component.css']
})
export class MovieIndexComponent implements OnInit {
datas: Data[]=[];
  constructor(
    public dataService :DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getAll().subscribe((data: Data[])=>{
      this.datas = data;
      console.log(this.datas);
    })  
  }

  deletePost(id:number){
    const confirmDelete = confirm('Are You Sure You Want To Delete This Movie 🎦?');
    if(confirmDelete){
    this.dataService.delete(id).subscribe(res => {
         this.datas = this.datas.filter(item => item.movieId !== id);
         alert("Movie Details Deleted Successfully..! 🍿");
         console.log('Post Deleted Successfully!');
    
    })
  }
}}
