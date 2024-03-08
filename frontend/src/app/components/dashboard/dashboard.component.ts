import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {SnippetTileComponent} from "./snippet-tile/snippet-tile.component";
import {fromEvent, Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, tap} from "rxjs/operators";
import {SharedModule} from "../../shared/shared.module";
import {ActivatedRoute} from "@angular/router";
import {UsersApiService} from "../users/users-api.service";
import {getSnippetCategory} from "../../shared/interfaces/get.snippets.categories.interface";
import {Store} from "@ngrx/store";
import {
  selectSnippetCategories,
  selectSnippetCategoriesState
} from "../../store/snippets-categories/snippets-categories.selectors";
import {
  addSnippetCategoryLocalSuccess,
  getSnippetCategoriesStart
} from "../../store/snippets-categories/snippets-categories.actions";
import {addSnippetCategoryLocal} from "../../shared/interfaces/add.snippet.category.local.interface";

interface Snippet {
  name: string;
  desc: string;
}
interface SnippetsCategoriesLevel {
  level: number;
  snippetsCategories: SnippetsCategory[];
}

interface SnippetsCategory {
  snippetCategoryName: string;
  snippets?: Snippet[]
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgForOf,
    MatIconModule,
    SnippetTileComponent,
    SharedModule,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.sass'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  listOfSnippets: SnippetsCategory[] = []
  inputObservable: Observable<string> = new Observable<string>()

  snippetsCategories$: Observable<getSnippetCategory[]> = new Observable<getSnippetCategory[]>()
  @ViewChild('listContainer') listContainer!: ElementRef;
  @ViewChild('snippetInput') snippetInput!: ElementRef;
  @ViewChild("scrollElement") scrollElement!: ElementRef;
  @ViewChildren("commentDiv") commentDivs!: QueryList<ElementRef>;
  constructor(private route: ActivatedRoute, private userService: UsersApiService, private store: Store) {
    const userId: string | null = this.route.snapshot.paramMap.get('userId');
    if (userId)
      this.store.dispatch(getSnippetCategoriesStart(userId))
  }


  ngOnInit() {
    this.snippetsCategories$ = this.store.select(selectSnippetCategories)
  }

  ngAfterViewInit(): void {
    this.subscribeToInputEvent();
  }

  subscribeToInputEvent(): void {
    fromEvent<any>(this.snippetInput.nativeElement, 'keyup')
      .pipe(debounceTime(1000), distinctUntilChanged(), tap(() => {
        const inputValue: string = this.snippetInput.nativeElement.value;
        this.store.dispatch(addSnippetCategoryLocalSuccess({ snippet_category: inputValue }));
        this.snippetInput.nativeElement.value = '';
        setTimeout(() => {
          this.scrollToRight();
        }, 100);
      }))
      .subscribe();
  }

  scrollToRight(): void {
    if (this.listContainer && this.listContainer.nativeElement) {
      const container = this.listContainer.nativeElement;
      const scrollWidth = container.scrollWidth - container.clientWidth;
      container.scrollTo({ left: scrollWidth, behavior: 'smooth' });
    }
  }


}
