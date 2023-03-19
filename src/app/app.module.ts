import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DemoComponent } from './components/demo/demo.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayAllWalletsComponent } from './components/display-all-wallets/display-all-wallets.component';
import { ShowAllWalletsComponent } from './components/show-all-wallets/show-all-wallets.component';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './components/update/update.component';
import { FundsComponent } from './components/funds/funds.component';
import { WithdrawFundsComponent } from './components/withdraw-funds/withdraw-funds.component';
import { TranferFundsComponent } from './components/tranfer-funds/tranfer-funds.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    HomeComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    DetailsComponent,
    DisplayAllWalletsComponent,
    ShowAllWalletsComponent,
    SearchPipe,
    UpdateComponent,
    FundsComponent,
    WithdrawFundsComponent,
    TranferFundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
