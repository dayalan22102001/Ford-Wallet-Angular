import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-display-all-wallets',
  templateUrl: './display-all-wallets.component.html',
  styleUrls: ['./display-all-wallets.component.css']
})
export class DisplayAllWalletsComponent implements OnInit{

  wallet:Wallet[] = [];
  httpClient: any;
  // msg: string;
  // errormsg: string;
  constructor (private  walletService:WalletService, private walletBackendService:WalletBackendService){}
  ngOnInit():void {
    // this.wallet = this.walletService.getAllWallets();
    // console.log(this.wallet);

    this.walletBackendService.getAllWallets().subscribe(
     { next:(data) => {
        console.log(data);
        this.wallet=data;
      },
      error:(error: any) =>{
        console.log(error);
      },
      complete:() =>{
        console.log("Request Completed...");
      }
    }
    )
        
  }
  deleteWallet(id?:number):void{
    this.walletBackendService.deleteWallet(id).subscribe({ 
      next:(data) => {
      console.log("Wallet Deleted");
      // this.msg = "wallet deleted"+id;
      // this.errormsg = "";
    },
    error:(error: any) =>{
      // this.msg = "";
      // this.errormsg = "Wallet could not be deleted";
      console.log("Wallet could not be deleted");
    },
    complete:() =>{
      console.log("Request Completed...");
    }
  });
    console.log("Wallet "+ id + " Deleted Successfully");
    window.alert("Wallet "+ id + " Deleted Successfully");
    
  }
  query:string = "";
  

}
