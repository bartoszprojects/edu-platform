import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appBasic3]'
})
export class Basic3Directive {

  constructor(private el: ElementRef) {
  }

  @HostListener('click')
  reactToClick() {
    this.el.nativeElement.style.backgroundColor = 'black';

  }

}
