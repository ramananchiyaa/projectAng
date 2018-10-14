import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { AboutComponent } from 'src/app/about/about.component';
import { LoginComponent } from 'src/app/login/login.component';
import { AddtocartComponent } from 'src/app/addtocart/addtocart.component';
import { UserComponent } from './user/user.component';

const routes : Routes = [
  { path : 'home' , component : HomeComponent},
  { path : 'about' , component : AboutComponent},
  { path : 'login' , component : LoginComponent},
  { path : 'addtocart' , component : AddtocartComponent },
  { path : 'user', component : UserComponent },
  { path : '', component : HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
