import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { AuthorService } from './author.service';
import { AuthorActions } from '../actions';

@Injectable()
export class AuthorEffects {
  constructor(
    private authorService: AuthorService,
    private actions$: Actions
  ) { }

  @Effect() loadAuthors$: Observable<Action> = this.actions$.ofType(AuthorActions.LOAD_AUTHOR_LIST)
    .mergeMap(action =>
      this.authorService.getAll()
        .map(data => ({ type: AuthorActions.LOAD_AUTHOR_LIST_SUCCESS, payload: data }))
        .catch(() => of({ type: AuthorActions.LOAD_AUTHOR_LIST_ERROR }))
    );
}