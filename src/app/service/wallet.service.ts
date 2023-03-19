import { Injectable, OnInit } from '@angular/core';
import { Wallet } from '../model/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService{

  wallet:Wallet[] = [];

  constructor() {
    this.wallet.push(new Wallet(1, "dayalan", 10000));
    this.wallet.push(new Wallet(2, "sharan", 20000));
    this.wallet.push(new Wallet(3, "bala", 30000));
    this.wallet.push(new Wallet(4, "arjun", 40000));
    this.wallet.push(new Wallet(5, "snegal", 50000));

   }
  

  getAllWallets():Wallet[]{
    return this.wallet;
    console.log(this.wallet);

  }

  addWallet(newWallet:Wallet):void{
    this.wallet.push(newWallet);
  }

  updateWallet():void{
    console.log("Wallet Updated");
  }

  addFunds():void{
    console.log("Funds Tranfered");
  }
}

