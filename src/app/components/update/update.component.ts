import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{
  
  id: string | null = "";

  wallet:Wallet = new Wallet();
  msg?: string;
  errormsg?: string;

  

  constructor (private activatedRoute:ActivatedRoute, private walletBackendService:WalletBackendService, private walletService:WalletService){}
  
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log("update id:" + this.id);  this.walletBackendService.getWalletById(this.id).subscribe(
      {
        next:(data) =>{
          
          this.wallet = data;
          console.log(data);
        },

        error:(error) =>{
          // this.msg = "";
          // this.errormsg = "Wallet could not be deleted";
          console.log(error);
        },
        complete:() =>{
          // this.msg = "Wallet Updated Successfully";
          // this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )

    
  }

  updateWallet(){
    console.log("Update wallet ");
    console.log(this.wallet);
    this.walletBackendService.updateWallet(this.wallet).subscribe(
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
          this.msg = "Wallet Updated Successfully";
          this.errormsg = "";
          console.log("Request Completed...");
        }
      }
    )
    
  }



}
