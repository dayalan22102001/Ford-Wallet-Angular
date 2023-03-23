import { Injectable } from '@angular/core';
import { Wallet } from '../model/wallet';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

  userLogin(wallet:Wallet):Observable<any>{
    return this.httpClient.post("http://localhost:8010/auth/login", wallet,{responseType:'json'});
  }

  userLogout(){ }

  getUserInfo():Observable<any>{

    let jwt = sessionStorage.getItem("jwt");

    var reqHeader = new HttpHeaders({ 
      'Content-type' : 'application/json',
      'Authorization' : `Bearer ${jwt}`      
    });

    return this.httpClient.get("http://localhost:8010/auth/userinfo", {headers:reqHeader});
  }
}
