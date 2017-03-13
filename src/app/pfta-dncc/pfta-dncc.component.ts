import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pfta-dncc',
  templateUrl: './pfta-dncc.component.html',
  styleUrls: ['../header/header.component.css']
})
export class PftaDnccComponent implements OnInit {
  @Input() defAppearanceText: string;
  withText: string;
  constructor() {
    this.withText = "without";
   }

  ngOnInit() {
  }
}
