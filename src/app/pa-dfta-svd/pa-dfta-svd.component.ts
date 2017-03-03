import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-dfta-svd',
  templateUrl: './pa-dfta-svd.component.html',
  styleUrls: ['../header/header.component.css']
})
export class PaDftaSvdComponent implements OnInit {
  isText: string;
  constructor() { 
    this.isText="is not";
  }

  ngOnInit() {
  }

}
