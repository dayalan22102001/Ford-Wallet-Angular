import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DemoComponent } from './components/demo/demo.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { DetailsComponent } from './components/details/details.component';
import { DisplayAllWalletsComponent } from './components/display-all-wallets/display-all-wallets.component';
import { ShowAllWalletsComponent } from './components/show-all-wallets/show-all-wallets.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'}, //redirect to first component
  {path :'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'demo', component:DemoComponent},
  {path: 'registration', component:RegistrationComponent},
  // {path:'**', component:PageNotFoundComponent}, //wildcard route for a 404 page
  {path:'details/:name', component:DetailsComponent}, 
  {path:'wallet', component:DisplayAllWalletsComponent},
  // {path: 'show', component:ShowAllWalletsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
