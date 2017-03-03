import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfta-dfta-dcc',
  templateUrl: './pfta-dfta-dcc.component.html',
  styleUrls: ['../header/header.component.css']
})
export class PftaDftaDccComponent implements OnInit {
  withText: string;
  withText1: string;
  constructor() { 
    this.withText="without";
    this.withText1="without";

  }

  ngOnInit() {
  }

}

