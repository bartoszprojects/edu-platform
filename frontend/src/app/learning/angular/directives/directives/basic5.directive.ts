import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  Renderer2,
  OnInit
} from '@angular/core';

type zeroType = 0

@Directive({
  selector: '[appBasic5]',
  exportAs: 'appBasic5'
})
export class Basic5Directive implements AfterViewInit {
  element: HTMLElement
  nextPageButton!: HTMLElement
  previousPageButton!: HTMLElement
  pageZero: zeroType = 0

  @Input() currentPage: number = 0
  @Input() totalPages: number = 5

  @Output() emitData: EventEmitter<number> = new EventEmitter<number>();


  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.element = elem.nativeElement

  }

  ngAfterViewInit(): void {
    // 'as HTMLElement' assertion - typescript cannot infer type here because it is inside another file
    this.nextPageButton = this.element.querySelector('#nextPage') as HTMLElement;
    this.previousPageButton = this.element.querySelector('#previousPage') as HTMLElement;
    this.disableButton(this.previousPageButton, true)

  }

  get getCurrentPage(): number {
    return this.currentPage
  }

  checkLastIndex(index: number): number {
    return (index >= this.totalPages) ? this.handleOutOfTotalPages(this.nextPageButton) :
      this.disableButton(this.previousPageButton, false)
  }

  checkFirstIndex(index: number): number {
    return (index <= 1) ? this.handleOutOfTotalPages(this.previousPageButton) :
      this.disableButton(this.nextPageButton, false)
  }


  handleOutOfTotalPages(buttonElement: HTMLElement): number {
    this.disableButton(buttonElement, true)
    return this.currentPage
  }


  disableButton(buttonElement: HTMLElement, event: boolean): number {
    this.renderer.setProperty(buttonElement, 'disabled', event);

    (event)? this.renderer.addClass(buttonElement, 'bl-disabled-button') :
      this.renderer.removeClass(buttonElement, 'bl-disabled-button')

    return this.currentPage

  }

  nextPage(): void {
    this.currentPage += 1;
    this.emitData.emit(this.checkLastIndex(this.currentPage));
  }


  previousPage(): void {
    this.currentPage -= 1
    this.emitData.emit(this.checkFirstIndex(this.currentPage))

  }

}
