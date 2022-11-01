import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { BlogModel } from './blog.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  formValue !: FormGroup;
  BlogModelObj :BlogModel = new BlogModel();
  blogData !:any;
  showAdd !: boolean;
  showUpdate !: boolean; 

  constructor(private router:Router,private api:ApiService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      title :[''],
      description :[''],
      content :['']
     
    })
    this.getUserBlog();
  }
  getUserBlog(){

  }
  posBlogDetails(){

  }
  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.BlogModelObj._id = row.id; 
    this.formValue.controls['firstName'].setValue(row.firstName)
    this.formValue.controls['lastName'].setValue(row.lastName)
    this.formValue.controls['email'].setValue(row.email)

  }
  updateEmployeeDetails(){

  }
  clickCreatePost(){
    this.showAdd = true
    this.showUpdate = false

  }


}
