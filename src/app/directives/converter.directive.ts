import { Directive, Input, Renderer2, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Directive({
  selector: '[appConverter]'
})
export class ConverterDirective {
  @Input('appConverter') content: string | undefined;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    if (this.content) {
      const sanitizedHtml: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`<p style="color:red">DEBESTA</p>`);
      this.renderer.setProperty(this.el.nativeElement, 'innerHTML', sanitizedHtml.toString());
    }
  }
}
