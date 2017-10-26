import { PeopleState } from './reducers/people.reducers';
import { PersonState } from './reducers/index';
import { subscribeOn } from 'rxjs/operators/subscribeOn';
import 'rxjs/add/operator/do';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { PersonActions } from './actions';
import { AppState } from '../reducers'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {
  people$: Observable<any>;
  isLoading: boolean = true;
  constructor(
    private personActions: PersonActions,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.people$ = this.store.select(state => state.person.people)
    .do((people: PeopleState) => this.isLoading = people.loading)
    .map(data => data.entities);
    this.store.dispatch(this.personActions.loadPersonList());
  }

  ngOnDestroy() {
    
  }

}
