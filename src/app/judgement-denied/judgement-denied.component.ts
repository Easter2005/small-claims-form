import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'judgement-denied',
  templateUrl: './judgement-denied.component.html',
  styleUrls: ['../header/header.component.css']
})
export class JudgementDeniedComponent implements OnInit {
  parties: any[];
  dismissedParties: any[];
  constructor() { 
    this.parties = [];
    this.parties.push({label:'plaintiff', value:'plaintiff'});
    this.parties.push({label:'defendant', value:'defendant'});
    this.parties.push({label:'either plaintiff or defendant', value:'either plaintiff or defendant'});
    this.dismissedParties = [];
    this.dismissedParties.push({label:"the plaintiff's claim is", value:"the plaintiff's claim is"});
    this.dismissedParties.push({label:"the defendant's counterclaim is", value:"the defendant's counterclaim is"});
    this.dismissedParties.push({label:'the claims of both parties are', value:'the claims of both parties are'});
  }

  ngOnInit() {
  }

}
