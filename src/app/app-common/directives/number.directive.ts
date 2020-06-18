import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumber]'
})
export class NumberDirective {

  @Input() appNumber: any;

  constructor() { }

  @HostListener('keydown', ['$event']) onKeydown(event: any) {
    // allow only numbers
    if (this.appNumber.hasOwnProperty('only-numbers')) {
      if (!((event.keyCode >= 48 && event.keyCode <= 57 && !event.shiftKey) ||
        (event.keyCode >= 96 && event.keyCode <= 105 && !event.metaKey) ||
        event.keyCode === 37 && event.keyCode === 39 ||
        event.keyCode === 8 || (event.keyCode === 9 && event.value !== '') || event.keyCode === 46 || event.keyCode === 110)) {
        return false;
      }
    }
  }
}
