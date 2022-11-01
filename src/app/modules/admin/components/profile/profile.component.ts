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
  BlogModelObj :BlogModel = new BlogModel;
  blogData !:any;
  showAdd !: boolean;
  showUpdate !: boolean; 
  postingTime:any

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
    this.api.getBlog()
    .subscribe(res => {
      this.blogData = res ;
    })

  }
  posBlogDetails(){
    this.BlogModelObj.title = this.formValue.value.title
    this.BlogModelObj.description = this.formValue.value.description;
    this.BlogModelObj.content = this.formValue.value.content;

    
    this.api.postBlog(this.BlogModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Post Added Succesfully")
      this.postingTime = new Date()
      let ref = document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getUserBlog();
      
    })


  }
  onEdit(row:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.BlogModelObj._id = row.id; 
    this.formValue.controls['title'].setValue(row.title)
    this.formValue.controls['description'].setValue(row.description)
    this.formValue.controls['content'].setValue(row.content)

  }
  updateEmployeeDetails(){
    this.BlogModelObj.title = this.formValue.value.title;
    this.BlogModelObj.description = this.formValue.value.description;
    this.BlogModelObj.content = this.formValue.value.content;

   
    this.api.updateBlog(this.BlogModelObj,this.BlogModelObj._id)
    .subscribe(res => {
      alert("Updated Succesfully");

      let ref = document.getElementById("cancel")
      ref?.click();
      this.formValue.reset();
      this.getUserBlog();    })
  }

    
    
  
  clickCreatePost(){
    this.showAdd = true
    this.showUpdate = false


  }
  deleteBlog(row:any){
    if(   confirm("Are You Sure Want To Delete?")
    )
    this.api.deleteBlog(row.id)
    .subscribe(res => {
      alert("Employee Deleted");
      this.getUserBlog();
    })
  }


}
