import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[appSnippetTileActive]'
})
export class SnippetTileActiveDirective implements AfterViewInit{
  element: HTMLElement
  parentElement: HTMLElement


  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.element = elem.nativeElement
    this.parentElement = this.renderer.parentNode(this.renderer.parentNode(this.element))


    this.renderer.listen(this.element, "click", this.onClick);
    // this.renderer.listen(this.element, "mouseleave", this.onMouseLeave);

  }
  ngAfterViewInit() {
  }

  onClick = (event: MouseEvent) => {
    this.parentElement.style.backgroundColor = '#f4edd6';
    this.parentElement.style.border = '2px solid #ffb300';

  }
  // onMouseLeave = (event: MouseEvent) => {
  //   this.parentElement.style.backgroundColor = '';
  // }
}
