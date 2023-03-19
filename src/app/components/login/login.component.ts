import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  wallet:Wallet = {name : "",password:""};
  constructor(private router:Router){};



// fun(){
//   console.log("Welcome User.");
// }

submitLoginForm(){
  if (this.wallet.name == "ford" && this.wallet.password== "ford123")
    this.router.navigateByUrl("home");

}




displayUserForm(){
  console.log("displayUserForm()");
  console.log(this.wallet);

}
}




