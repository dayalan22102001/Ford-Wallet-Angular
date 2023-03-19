import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Wallet } from 'src/app/model/wallet';
import { WalletBackendService } from 'src/app/service/wallet-backend.service';
import { WalletService } from 'src/app/service/wallet.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  wallet:Wallet = new Wallet();
  datePipe: any;

  // wallet.doc = this.datePipe.transform(this.wallet, 'yyyy-MM-dd');

  constructor(private walletservice:WalletService, private walletBackendService:WalletBackendService) {}

  submitForm(){

    this.walletservice.addWallet(this.wallet);
    console.log(this.wallet);

    let wltPost: Observable<any> = this.walletBackendService.addWallet(this.wallet);
    wltPost.subscribe(
      {
        next:(data) => {
          console.log(data);
        },
        error:(error) =>{
          console.log(error);
        },
        complete:() =>{
          console.log("Post Request Completed...");
        }
      }
    )

  }


  
}
