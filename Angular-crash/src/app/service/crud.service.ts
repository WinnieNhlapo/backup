import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiEndPoint=environment.todoUrl;

  constructor(private http:HttpClient) { }

   getTodo(): Promise<any>{
   return  this.http.get(this.apiEndPoint).toPromise().then((res:any)=>{
    console.log(res);
  }).catch((error:any)=>{
      console.log(error)
  })
  }

  createTodo(body:any){
    return this.http.post(this.apiEndPoint,body).subscribe( (res:any)=>{
       console.log(res);
     }
     )
   }

   deleteTodo(id:any){
    return this.http.delete(this.apiEndPoint,id).subscribe( (res:any)=>{
       console.log(res);
     }
     )
   }

   updateTodo(body:any){
    return this.http.put(this.apiEndPoint,body).subscribe( (res:any)=>{
       console.log(res);
     }
     )
   }



}
