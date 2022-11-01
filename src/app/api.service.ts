import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  postBlog(data : any){
    return this.http.post<any>("http://localhost:3000/posts",data)
   
  }
  getBlog(){
    return this.http.get<any>("http://localhost:3000/posts")
    
  }
  updateBlog(data :any,id: number){
    return this.http.put<any>("http://localhost:3000/posts/"+id,data)
    
  }
  deleteBlog(id : number){
    return this.http.delete<any>("http://localhost:3000/posts/"+id)
    
  }
  getUserBlog(user_id:any){
    return this.http.get<any>("http://localhost:3000/posts/"+user_id)
  }
}


