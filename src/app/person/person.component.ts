import { subscribeOn } from 'rxjs/operators/subscribeOn';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as actions from './actions';
import { AppState } from '../reducers'

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, OnDestroy {
  people$: Observable<any>;
  subscribion: Subscription;
  constructor(private store: Store<AppState>) {

  }

  increment() {
    let pa = new actions.PersonActions();
    this.store.dispatch(pa.incrementCounter());
  }

  ngOnInit() {
    this.people$ = this.store.select(state => state.person);
    this.subscribion = this.people$.subscribe((p) => console.log('peo', p));
  }

  ngOnDestroy() {
    this.subscribion.unsubscribe();
  }

}
