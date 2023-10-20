import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {GlobalService} from "../../../services/global.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-code-example',
  templateUrl: './code-example.component.html',
  styleUrls: ['./code-example.component.sass']
})
export class CodeExampleComponent implements OnInit, AfterViewInit {
  snippets$: Observable<any> | undefined;

  @Input() generalDescription: string = 'no description';
  @Input() moreDescription: string = 'no description';

  @Input() panelOpenState: boolean = false;


  @Input() title: string = 'default title';

  @Input() codeTabDesc: string = 'codeTabDesc default desc';

  @Input() codeTabSnippetPath: string[] = [];
  @Input() codeTabSnippetSelect: string = '';

  @Input() codeTabKeywords: string[] = ['default'];

  @Input() keywords: string[] = ['default'];


  constructor(private globalService: GlobalService) {

  }

  ngAfterViewInit() {
    if (this.codeTabSnippetPath.length > 0)
    this.snippets$ = this.globalService.getCodeSnippet(this.codeTabSnippetPath[0], this.codeTabSnippetPath[1])

  }

  ngOnInit() {
  }

}
