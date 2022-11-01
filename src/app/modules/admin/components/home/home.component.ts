import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogData:any

  constructor(private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.getAllBlogs()
  }
  getAllBlogs(){
    this.api.getBlog()
    .subscribe(res=>{
      console.log(res);
      this.blogData = res

     
      
      
      
    })


  }

}
