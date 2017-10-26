import { PersonState } from './reducers/index';
import { subscribeOn } from 'rxjs/operators/subscribeOn';
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
  subscribion: Subscription;
  pp: any[];
  constructor(
    private personActions: PersonActions,
    private store: Store<AppState>) {
  }

  ngOnInit() {
    this.pp = [{id:1, firstName: 'J'}, {id:2, firstName: 'T'}];
    this.people$ = this.store.select(state => state.person)
    .map((data: any) => data.people.entities);
    this.store.dispatch(this.personActions.loadPersonList());
  }

  ngOnDestroy() {
    this.subscribion.unsubscribe();
  }

}
