import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billtab',
  templateUrl: './billtab.component.html',
  styleUrls: ['./billtab.component.css']
})
export class BilltabComponent implements OnInit {

  billNameList:any=[
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
