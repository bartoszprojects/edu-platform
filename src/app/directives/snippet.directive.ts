import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appSnippet]'
})
export class SnippetDirective implements OnInit{
  @Input('fontSizex') fontSizex: string | undefined;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.style.fontSize = this.fontSizex;

  }
}
