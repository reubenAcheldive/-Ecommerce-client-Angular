import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appProductStyle]',
})
export class ProductStyleDirective {
  constructor(el: ElementRef) {
    console.log({el});
    
    el.nativeElement.style.color = 'red';
  }
}
