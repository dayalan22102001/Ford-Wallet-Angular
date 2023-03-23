import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  wallet:Wallet = new Wallet();
  constructor(private router:Router, private authService:AuthService){};
  name?:string;
  password?:string;
  msg?:any;
  error?:any;

// fun(){
//   console.log("Welcome User.");
// }
submitLoginForm(){

  
  this.authService.userLogin(this.wallet).subscribe(
    {
      next:(data)=>{
        this.msg = "Wallet Logged In";
        this.error = ""
        console.log(data);
        sessionStorage.setItem("user",JSON.stringify(data));
        console.log(data.jwt);
        sessionStorage.setItem("jwt",data.jwt);
        sessionStorage.setItem("role",data.role);
        
        //localStorage
        this.router.navigateByUrl("home");
      },
      error:(err)=>{
        this.msg = "";
        this.error = err;
        console.log(err);
      }
    }
  )
    // this.router.navigateByUrl('home');
  console.log("submitLoginForm()");

}




displayUserForm(){
  console.log("displayUserForm()");
  console.log(this.wallet);

}
}




