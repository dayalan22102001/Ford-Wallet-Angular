import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from './model/wallet';
// import { Wallets } from './wallets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  role:string | null ="user" ;
  constructor (private router:Router) { }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    console.log("Role check!");
    
    this.role =sessionStorage.getItem("role");
  }

  userLogout() {
    console.log("User Logout!");
    sessionStorage.clear();    
    this.role =sessionStorage.getItem("role");
    this.router.navigate(['registration']);
  }

  checkRole():string{
    let role =sessionStorage.getItem("role");

    switch(role){
      case "user":return "user"
      
      case "admin":return "admin"
      default:return "public"
    }
  }

  wallet:Wallet = new Wallet();
  name = "";
  
  
  // displayDetails(){
  //   console.log("Details clicked");
  //   this.router.navigate(['details',this.name]);
  // }

  addFunds(){
    this.router.navigate(['funds']);

  }

  withdrawFunds(){
    this.router.navigate(['withdrawFunds']);

  }

  tranferFunds(){
    this.router.navigate(['tranferFunds']);

  }


}
