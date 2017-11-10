import { subscribeOn } from 'rxjs/operators/subscribeOn';
import 'rxjs/add/operator/do';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as authorActions from './store';
import { AppState } from '../core/store/meta.reducer'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, OnDestroy {
  authors$: Observable<any>;
  isLoading: boolean = true;
  constructor(
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authors$ = this.store.select((state: AppState) => state.author.authorList)
    .do((author: any) => this.isLoading = author.loading)
    .map(data => data.displayedItems);
    this.store.dispatch(new authorActions.LoadAuthorList());
  }

  searchAuthors(term: string) {
    this.store.dispatch(new authorActions.SearchAuthorList(term));
  }
  
  sortAuthors(sort: Sort) {
    console.log('author', sort)
    this.store.dispatch(new authorActions.SortAuthorList(sort));
  }

  ngOnDestroy() {
    
  }

}
