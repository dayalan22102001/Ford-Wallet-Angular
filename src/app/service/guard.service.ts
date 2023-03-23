import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private router:Router) { }
  canActivate(): boolean  {
    
    if(sessionStorage.getItem("jwt") != null){

      return   true;
    }
    else
    {
      alert("Please Login, you are not authorised!")
      this.router.navigateByUrl("login");
      return   false;
    }
     
  }
}
