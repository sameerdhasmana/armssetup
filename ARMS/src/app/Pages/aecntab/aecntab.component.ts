import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aecntab',
  templateUrl: './aecntab.component.html',
  styleUrls: ['./aecntab.component.css']
})
export class AecntabComponent implements OnInit {

  aecnlist:any=[
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
