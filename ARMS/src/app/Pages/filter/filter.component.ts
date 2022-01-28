import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  assignedList:any=[
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

    opts:any=[
      {
        value:1,
        label:"Active Write-Off"
      },
      {
        value:2,
        label:"ACUS FINAL"
      },{
        value:3,
        label:"Admin Claim"
      },
      {
        value:4,
        label:"Affiliate Account"
      },{
        value:5,
        label:"Aged Finals"
      }
        ]
        
        optsTwo:any=[
          {
            value:0,
            label:""
          },
          {
            value:1,
            label:"ACC"
          },
          {
            value:2,
            label:"ACIS"
          },{
            value:3,
            label:"ACUS"
          },
          {
            value:4,
            label:"AGNS"
          },{
            value:5,
            label:"AIS"
          }
            ]

            optsThree:any=[
              {
                value:1,
                label:"ASC"
              },
              {
                value:2,
                label:"COL"
              },{
                value:3,
                label:"HSV"
              },
              {
                value:4,
                label:"IRC"
              },{
                value:5,
                label:"LSC"
              }
                ]   
            
                yearList:any=[
                  {
                    value:1,
                    label:"202201"
                  },
                  {
                    value:2,
                    label:"202112"
                  },{
                    value:3,
                    label:"202111"
                  },
                  {
                    value:4,
                    label:"202110"
                  },{
                    value:5,
                    label:"202109"
                  }
                ]    
                segmentList:any=[
                  {
                    value:"APX",
                    label:"APX- APEX"
                  },
                  {
                    value:"CAP",
                    label:"CAP- Competitive Access Provider"
                  },{
                    value:"CMC",
                    label:"CMC- Cellular"
                  },
                  {
                    value:"IXC",
                    label:"IXC- Long Distance"
                  },{
                    value:"OOR",
                    label:"OOR- Out of Region ASC"
                  }
                ]              

  selectedYear=this.yearList[0].value;                
  constructor() { }

  ngOnInit(): void {
  }

}
