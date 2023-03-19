import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-withdraw-funds',
  templateUrl: './withdraw-funds.component.html',
  styleUrls: ['./withdraw-funds.component.css']
})
export class WithdrawFundsComponent {

  wallet:Wallet = new Wallet();
  id: any;
  balance: any;
  errormsg?: string;
  msg?: string;

  constructor (private activatedRoute:ActivatedRoute, private walletBackendService:WalletBackendService, private walletService:WalletService){}
  withdrawFunds(id:number,balance:number):void{
    this.walletBackendService.withdrawFunds(id,balance).subscribe(
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
          this.msg = "Funds Withdrawed Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
  }

}
