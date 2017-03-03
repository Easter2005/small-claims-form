import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pfta-dacc',
  templateUrl: './pfta-dacc.component.html',
  styleUrls: ['../header/header.component.css']
})
export class PftaDaccComponent implements OnInit {
  withText: string;
  isText: string;
  constructor() {
    this.withText="without";
    this.isText="is not";

   }

  ngOnInit() {
  }

}
