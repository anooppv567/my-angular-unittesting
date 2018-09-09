import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 private userName = 'admin';
 private password = 'admin';
  constructor() { }
   validateUserDetails = (userDetails:any) : Observable<boolean> =>{
    if(this.userName === userDetails.username && this.password === userDetails.password){
      return of(true);
    }
    else{
      return of(false);
    }
   }
}
