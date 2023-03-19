import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  wallet:Wallet = new Wallet();
  constructor(private router:Router){};
  name?:string;
  password?:string;

// fun(){
//   console.log("Welcome User.");
// }
submitLoginForm(name?:string,password?:string){
  console.log(name + "  " + password);

}




displayUserForm(){
  console.log("displayUserForm()");
  console.log(this.wallet);

}
}




