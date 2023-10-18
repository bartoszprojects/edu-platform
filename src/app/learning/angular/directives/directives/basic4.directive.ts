import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBasic4]'
})
export class Basic4Directive {
  element: HTMLElement
  parentElement: HTMLElement

  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.element = elem.nativeElement
    this.parentElement = this.renderer.parentNode(this.element)

    this.renderer.listen(this.element, "mousemove", this.onMouseMove);
    this.renderer.listen(this.element, "mouseleave", this.onMouseLeave);

  }

  onMouseMove = (event: MouseEvent) => {
    this.parentElement.style.backgroundColor = 'silver';
  }
  onMouseLeave = (event: MouseEvent) => {
    this.parentElement.style.backgroundColor = '';
  }
}
