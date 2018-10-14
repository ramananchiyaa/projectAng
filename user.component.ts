import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { fakeDetails } from 'src/app/mocklist';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  inputDetails = fakeDetails;
  router: any;

  getUsers() : void{
    this.appservice.getUsers().subscribe(inputDetails => this.inputDetails=inputDetails);
  }


  constructor(private appservice : AppService) { }

  ngOnInit() {
    this.getUsers();
  }

}
