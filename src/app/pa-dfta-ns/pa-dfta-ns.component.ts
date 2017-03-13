import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pa-dfta-ns',
  templateUrl: './pa-dfta-ns.component.html',
  styleUrls: ['../header/header.component.css']
})
export class PaDftaNsComponent implements OnInit {
  isGoodCause: boolean;
  gcText: string;
  @Output() isDismissed: EventEmitter<boolean> = new EventEmitter<boolean>();
  withText: string;
  constructor() { 
    this.isGoodCause = false;
    this.gcText = "no good cause";
    this.withText="without";
  }

  ngOnInit() {
  }
  onGoodCauseChange(){
    this.gcText=this.isGoodCause? 'good cause': 'no good cause'; 
    this.isDismissed.emit(!this.isGoodCause);
  }
}
