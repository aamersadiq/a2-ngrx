import { AuthorListState } from './reducers/author-list.reducers';
import { subscribeOn } from 'rxjs/operators/subscribeOn';
import 'rxjs/add/operator/do';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { AuthorActions } from './actions';
import { AppState } from '../reducers'

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit, OnDestroy {
  authors$: Observable<any>;
  isLoading: boolean = true;
  constructor(
    private authorActions: AuthorActions,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.authors$ = this.store.select((state: AppState) => state.author.authorList)
    .do((author: AuthorListState) => this.isLoading = author.loading)
    .map(data => data.displayedItems);
    this.store.dispatch(this.authorActions.loadAuthorList());
  }

  searchAuthors(term: string) {
    this.store.dispatch(this.authorActions.searchAuthorList(term));
  }
  
  sortAuthors(sort: Sort) {
    console.log('author', sort)
    this.store.dispatch(this.authorActions.sortAuthorList(sort));
  }

  ngOnDestroy() {
    
  }

}
