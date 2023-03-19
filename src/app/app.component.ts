import { Component } from '@angular/core';
// import { Wallets } from './wallets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-app';
  date = new Date();
  carImage = "../assets/images/car.jpg";
  name = "Ford";
  password = "";
  isVisible:boolean = true;
  a:number = 10;
  b:number = 5;
  choice:number = 1;
  countries = ["india","usa","uk", "japan", "china"];
  fun(){
    console.log("Welcome User.");
  }

  display(){
    window.alert(this.name + ":" + this.password);
  }
  wallets:{id:number,owner:string, balance:number}[] =[
  {id:1, owner:"dayalan",balance:1200},
  {id:2, owner:"micheal",balance:3100},
  {id:3, owner:"andrew",balance:2300} ]

  // wallet:Wallets={id:0, name: "", balance: 0}

  // displayUserForm(){
  //   console.log("displayUserForm()");
  //   console.log(this.wallet);

  // }


}
