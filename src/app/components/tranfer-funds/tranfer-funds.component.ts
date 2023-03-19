import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-tranfer-funds',
  templateUrl: './tranfer-funds.component.html',
  styleUrls: ['./tranfer-funds.component.css']
})
export class TranferFundsComponent {

  wallet:Wallet = new Wallet();
  fromId: any;
  toId: any;
  balance: any;
  errormsg?: string;
  msg?: string;

  constructor (private activatedRoute:ActivatedRoute, 
    private walletBackendService:WalletBackendService, private walletService:WalletService){}

  tranferFunds(fromId:number, toId:number, balance:number){
    return this.walletBackendService.tranferFunds(fromId,toId,balance).subscribe(
      {
        next:(data) =>{
          this.msg = "Funds Tranfered Successfully";
          this.wallet = data;
          console.log(data);
        },

        error:(error) =>{
          console.log(error.error);
          this.msg= "";
          this.errormsg= JSON.stringify(error.error);
        },
        complete:() =>{
          this.msg = "Funds Tranfered Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
  }

}
