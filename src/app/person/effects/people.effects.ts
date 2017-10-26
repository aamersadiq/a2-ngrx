import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { PersonActions } from '../actions';

@Injectable()
export class PeopleEffects {
    constructor(
    //   private http: Http,
      private actions$: Actions
    ) {}      

  @Effect() loadPersons$: Observable<Action> = this.actions$.ofType(PersonActions.LOAD_PERSON_LIST)
    .mergeMap(action =>
      of([
          {
              id: 1,
              firstName: 'John',
              lastName: 'T'
          }
      ])
    //   this.http.post('/auth', action.payload)
        // If successful, dispatch success action with result
        .map(data => ({ type: PersonActions.LOAD_PERSON_LIST_SUCCESS, payload: data }))
        // If request fails, dispatch failed action
        .catch(() => of({ type: PersonActions.LOAD_PERSON_LIST_ERROR }))
    );
}