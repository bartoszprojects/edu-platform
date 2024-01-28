import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasic]'
})
export class BasicDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'black';
    this.el.nativeElement.style.color = 'white';

  }

}
