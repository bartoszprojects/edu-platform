import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { GlobalService } from "../../../services/global.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.sass']
})
export class CodeExampleComponent implements OnInit, AfterViewInit {
  snippets$: Observable<any> | undefined;
  bart = 'app-concatmap-interactive1'
  // mat-tab CODE SNIPPET
  @Input() codeTabDesc: string = 'codeTabDesc default desc';
  @Input() codeTabSnippetPath: string[] = [];
  @Input() codeTabSnippetSelect: string = '';

  // mat-tab INTERACTIVE
  @Input() interactiveTabPath: string = '';

  // mat-tab IMAGE
  @Input() imageTabPath: string = '';

  // mat-tab TEXT
  @Input() textTabPath: string = '';

  // mat-tab VIDEO
  @Input() videoTabPath: string = '';

  // others
  @Input() codeTabKeywords: string[] = ['default'];
  @Input() panelOpenState: boolean = false;
  @Input() title: string = 'default title';

  constructor(private globalService: GlobalService) {
  }

  ngAfterViewInit() {
    if (this.codeTabSnippetPath.length > 0)
    this.snippets$ = this.globalService.getCodeSnippet(this.codeTabSnippetPath[0], this.codeTabSnippetPath[1])
  }

  ngOnInit() {
  }

}
