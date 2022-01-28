import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acnatab',
  templateUrl: './acnatab.component.html',
  styleUrls: ['./acnatab.component.css']
})
export class AcnatabComponent implements OnInit {

  acnalist:any=[
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
