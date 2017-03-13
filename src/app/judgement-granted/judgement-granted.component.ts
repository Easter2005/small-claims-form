import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'judgement-granted',
  templateUrl: './judgement-granted.component.html',
  styleUrls: ['../header/header.component.css']
})
export class JudgementGrantedComponent implements OnInit {
  parties: any[];
  constructor() { 
    this.parties = [];
    this.parties.push({label:'plaintiff', value:'plaintiff'});
    this.parties.push({label:'defendant', value:'defendant'});
  }
  ngOnInit() {
  }

}
