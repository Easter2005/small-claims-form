import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'judgement-granted',
  templateUrl: './judgement-granted.component.html',
  styleUrls: ['../header/header.component.css']
})
export class JudgementGrantedComponent implements OnInit {
  parties: any[];
  paymentTerms: any[];
  checkConditions: any[];
  constructor() { 
    this.parties = [];
    this.parties.push({label:'plaintiff', value:'plaintiff'});
    this.parties.push({label:'defendant', value:'defendant'});
    this.paymentTerms =[];
    this.paymentTerms.push({label:'within 30 days of this order', value:'within 30 days of this order'});
    this.paymentTerms.push({label:'on terms agreed to by the parties', value:'on terms agreed to by the parties'});
    this.checkConditions=[];
    this.checkConditions.push({label:'Thereafter', value:'Thereafter'});
    this.checkConditions.push({label:'Upon failure to comply with payment terms', value:'Upon failure to comply with payment terms'});
  }
  ngOnInit() {
    
  }

}
