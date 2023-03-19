import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  msg?: string;
  errormsg?: string ;
  constructor ( private router:Router, private walletService:WalletService, private walletBackendService:WalletBackendService){}
  ngOnInit():void {
    this.wallet = this.walletService.getAllWallets();
    console.log(this.wallet);

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
      this.msg = "wallet of id " + id +" deleted ";
      this.errormsg = "";

      this.wallet =this.wallet.filter(
        (wlt) => wlt.id != id?true:false
        
      )
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

  updateWallet(wlt:Wallet){
    console.log("Update Wallet "+ wlt);
    this.router.navigate(['update',wlt.id]);
  }
  query:string = "";


  

}
