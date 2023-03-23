import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { AuthService } from 'src/app/service/auth.service';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  role?:any;

  constructor( private authService:AuthService, private router:Router, private walletBackedService:WalletBackendService){ }

  wallet:Wallet= new Wallet();
  wallets:Wallet[] = [];
  msg?:any;
  errormsg?:any;



  ngOnInit(): void {
    this.authService.getUserInfo().subscribe(
      {
        next:(data)=>{
          console.log(data);  
          this.wallet= data;

        },
        error:(err)=>{
          console.log(err);
        }
      }
    )
  }

  updateWallet(wlt:Wallet){
    console.log("Update Wallet "+ wlt);
    this.router.navigate(['update',wlt.id]);
  }

  deleteWallet(id?:number):void{
    this.walletBackedService.deleteWallet(id).subscribe({ 
      next:(data) => {
      console.log("Wallet Deleted");
      this.msg = "wallet of id " + id +" deleted ";
      this.errormsg = "";
      sessionStorage.clear();
      this.role =sessionStorage.getItem("role"); 

      this.router.navigate(['registration']);

      // this.wallet =this.wallet.filter(
      //   (wallet) => wallet.id != id?true:false
        
      // )
    },
    error:(error: any) =>{
      this.msg = "";
      this.errormsg = "Wallet could not be deleted";
      console.log("Wallet could not be deleted");
    },
    complete:() =>{
      console.log("Request Completed...");
    }
  });
    console.log("Wallet "+ id + " Deleted Successfully");
    
  }
  // userLogout() {
  //   console.log("User Logout!");
  //   sessionStorage.clear();    
  //   wallet.role =sessionStorage.getItem("role");
  //   this.router.navigate(['login']);
  // }

}
