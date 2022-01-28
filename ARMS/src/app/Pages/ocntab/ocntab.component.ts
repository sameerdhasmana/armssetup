import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocntab',
  templateUrl: './ocntab.component.html',
  styleUrls: ['./ocntab.component.css']
})
export class OcntabComponent implements OnInit {

  ocnlist:any=[
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
