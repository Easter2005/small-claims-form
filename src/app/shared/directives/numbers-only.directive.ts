import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[OnlyNumber]'
})
export class NumbersOnlyDirective {
  @Input() OnlyNumber: boolean;

  constructor(private el:ElementRef) {
    }

  @HostListener('keydown', ['$event']) onKeyDown(event) {
    let e = <KeyboardEvent> event;
    if (this.OnlyNumber) {
      //console.log(e.keyCode);
      if ([46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
        // Allow: Ctrl+A
        (e.keyCode == 65 && e.ctrlKey === true) ||
        // Allow: Ctrl+C
        (e.keyCode == 67 && e.ctrlKey === true) ||
        // Allow: Ctrl+X
        (e.keyCode == 88 && e.ctrlKey === true) ||
        // Allow: home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
          // let it happen, don't do anything
          return;
        }
        if(e.keyCode == 110 || e.keyCode == 190)
        {
            if(this.el.nativeElement.value.indexOf('.')>=0){
              e.preventDefault();
            }
            else return;
        }
        if((e.keyCode > 47 && e.keyCode < 58) ||
        (e.keyCode > 95 && e.keyCode < 106 )){
          var cursorPos = this.el.nativeElement.selectionStart;
          var decimalPos = this.el.nativeElement.value.indexOf('.');
          if (decimalPos > 0 && cursorPos > decimalPos+2){
            e.preventDefault();
          }
          else return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
      }
  }
}

