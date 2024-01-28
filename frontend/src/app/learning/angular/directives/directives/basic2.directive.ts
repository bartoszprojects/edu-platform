import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBasic2]'
})
export class Basic2Directive {
  @Input() color = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
