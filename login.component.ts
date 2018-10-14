import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router : Router) { }

  ngOnInit() {
  }

  login()
  {
    if(this.email == 'b@gmail.com' && this.password == '1234')
    {
      this.router.navigate(['user']);
    }   
    else
    {
      alert("invalid credentials");
    }
  }
}
