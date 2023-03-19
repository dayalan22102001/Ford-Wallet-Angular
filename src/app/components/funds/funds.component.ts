import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent {

  wallet:Wallet = new Wallet();
  id: any;
  balance: any;
  errormsg?: string;
  msg?: string;

  constructor (private activatedRoute:ActivatedRoute, private walletBackendService:WalletBackendService, private walletService:WalletService){}
  

  addfunds(id:number,balance:number){
    this.walletBackendService.addFunds(id,balance).subscribe(
      {
        next:(data) =>{
          
          this.wallet = data;
          console.log(data);
        },

        error:(error) =>{
          console.log(error.error);
          this.msg= "";
          this.errormsg= JSON.stringify(error.error);
        },
        complete:() =>{
          this.msg = "Funds Added Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
    console.log(id,balance);
  }

}
