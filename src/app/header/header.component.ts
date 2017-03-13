import { Component, OnInit, Input,ElementRef} from '@angular/core';
import {Division, DivisionService, Court, CourtService, Doctitle, DoctitleService} from '../shared/shared';
import {Message} from 'primeng/components/common/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  msgs: Message[] = [];
  private nativeElement : Node;
  private divisions: Division[];
  private courts: Court[];
  private titles: Doctitle[];
  private selectedDivision: string;
  private currentCourts: Court[];
  private plaintiffAppearance : string;
  private pAprc: string;
  private defendantAppearance : string;
  private dAprc: string;
  private isPlaintiffAppeared: boolean;
  private isDefendantAppeared: boolean;
  private servedText: string;
  private isDismissed: boolean;

  constructor( private elementRef : ElementRef,
               private divisionService: DivisionService,
               private courtService: CourtService,
               private titleService: DoctitleService){
      this.nativeElement = elementRef.nativeElement;
      this.divisions = this.divisionService.divisionStore;
      this.courts = this.courtService.courtStore;
      this.titles = this.titleService.doctitleStore;
      this.isPlaintiffAppeared = false;
      this.isDefendantAppeared = false;
      this.plaintiffAppearance = "did not appear";
      this.defendantAppearance = "did not appear";
      this.servedText = "was not";
      this.isDismissed = true;
    }

  ngOnInit(): void {
    this.divisionService.divisionFeed.subscribe(newDivision =>{
      var len = this.divisions.length;
      if(len == 0)
      {
        this.divisions.push(newDivision);
      }
      else if(this.divisions[len-1].name != newDivision.name )
      {
        this.divisions.push(newDivision);
      }
  });
  this.courtService.courtFeed.subscribe(newCourt => {
    this.courts.push(newCourt);
  });
  this.titleService.doctitleFeed.subscribe(newTitle=>{
    this.titles.push(newTitle);
  });
}
  onDivisionChange(division: string): void {
    this.selectedDivision = division;
    this.currentCourts = this.courts.filter(court=> court.division == division);
  }
 
 onPlaintiffClick(e){
   this.isPlaintiffAppeared = e.checked;
   this.plaintiffAppearance = e.checked? 'appeared':'did not appear';
   this.pAprc = e.checked? 'appeared':'not appeared';
   this.isDismissed = !e.checked;
   this.showInfo();
 }
 onDefendantClick(e){
   this.isDefendantAppeared = e.checked;
   this.defendantAppearance = e.checked? 'appeared':'did not appear';
   this.dAprc = e.checked? 'appeared':'not appeared';
   this.showInfo();
 }
 onIsDismissed(isDissmissed: boolean)
 {
   this.isDismissed = isDissmissed;
   this.showInfo();
 }
 ifDismissed(): boolean{
   if(this.isDismissed == null) {return true;}
   else return this.isDismissed;
 }
 ifNotDismissed(): boolean{
   if(this.isDismissed == null)
   return false;
   else return !this.isDismissed;
 }
 showInfo(){
    this.msgs = [];
    this.msgs.push({severity: 'info', summary:'', detail:'Plaintiff: '+this.plaintiffAppearance});
    this.msgs.push({severity: 'info', summary:'', detail:'Defendant: '+this.defendantAppearance});
    this.msgs.push({severity: 'info', summary:'', detail:'Dissmissed?: '+this.isDismissed});
  }
  printForm(sectionId: string){
    const tmp = document.createElement('div');
    const el = this.nativeElement.cloneNode(true);
    tmp.appendChild(el.childNodes[0]);
    [].forEach.call(tmp.querySelectorAll('.noprint'),function(e){
      e.parentNode.removeChild(e);
    });
    [].forEach.call(tmp.querySelectorAll('.hide-me'),function(e){
      e.className = e.className.replace('hide-me','show-me-now');
    });
    let popupWinindow
    let innerContents = tmp.innerHTML;///document.getElementById(sectionId).innerHTML;

    popupWinindow = window.open('', '_blank', 'width=1000,height=850,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><meta charset="utf-8">'+
    '<meta name="viewport" content="width=device-width, initial-scale=1">'+
    '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>'+
    '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>'+
    '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />'+
    '<style> .row.no-gutter {margin-left: 0;margin-right: 0;} .row.no-gutter [class*="col-"]:not(:first-child),.row.no-gutter [class*="col-"]:not(:last-child) {padding-right: 0;padding-left: 0;}'+
    '.ml-1 { margin-left: 15px !important;}</style> '+
    '</head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
}


