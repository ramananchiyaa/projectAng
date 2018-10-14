import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})
export class AddtocartComponent implements OnInit {

  
  itemCount: number = 4;
  goalText: string = '';
  goals=[];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem()
  {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;
  }

}

