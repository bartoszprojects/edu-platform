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

  @Output() outerPage: EventEmitter<number> = new EventEmitter<number>();


  constructor(private elem: ElementRef, private renderer: Renderer2) {
    this.element = elem.nativeElement


  }

  ngAfterViewInit(): void {
    // 'as HTMLElement' assertion - typescript cannot infer type here because it is inside another file
    this.nextPageButton = this.element.querySelector('#nextPage') as HTMLElement;
    this.previousPageButton = this.element.querySelector('#previousPage') as HTMLElement;
  }

  get getCurrentPage(): number {
    return this.currentPage
  }

  checkLastIndex(index: number): number {
    return (index > this.totalPages) ? this.handleLastPage : index
  }

  checkFirstIndex(index: number): number {
    return (index < 1) ? this.handleFirstPage : index
  }

  get handleLastPage(): number {
    this.disableButton(this.nextPageButton)
    return this.totalPages
  }

  get handleFirstPage(): number {
    this.disableButton(this.previousPageButton)
    return this.totalPages
  }

  disableButton(buttonElement: HTMLElement): void {
    this.renderer.setProperty(buttonElement, 'disabled', true);
  }

  nextPage(): void {
    this.currentPage += 1;
    this.outerPage.emit(this.checkLastIndex(this.currentPage));
  }


  previousPage(): void {
    this.currentPage -= 1
    this.outerPage.emit(this.checkFirstIndex(this.currentPage))

  }

  lastPage(): void {

  }

  firstPage(): void {

  }

}
