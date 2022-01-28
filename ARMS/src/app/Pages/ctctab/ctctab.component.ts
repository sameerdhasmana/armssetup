import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ctctab',
  templateUrl: './ctctab.component.html',
  styleUrls: ['./ctctab.component.css']
})
export class CtctabComponent implements OnInit {

  ctclist:any=[
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
