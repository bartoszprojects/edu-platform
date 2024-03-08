import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {SharedModule} from "../../../shared/shared.module";

@Component({
  selector: 'app-snippet-tile',
  standalone: true,
  imports: [
    MatIconModule,
    SharedModule
  ],
  templateUrl: './snippet-tile.component.html',
  styleUrl: './snippet-tile.component.sass'
})
export class SnippetTileComponent implements OnInit, AfterViewInit{
  @Input() parentData!: string | undefined
  @Input() isLocal!: boolean | undefined

  constructor() {

  }
  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
