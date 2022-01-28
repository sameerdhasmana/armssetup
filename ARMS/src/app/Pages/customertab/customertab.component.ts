import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customertab',
  templateUrl: './customertab.component.html',
  styleUrls: ['./customertab.component.css']
})
export class CustomertabComponent implements OnInit {

  
  customers:any=[
    {
      value:1,
      label:"US AAFES"
    },
    {
      value:2,
      label:"US AAFES 2"
    },{
      value:3,
      label:"US AAFES 3"
    }
      ]
  constructor() { }

  ngOnInit(): void {
  }

}
