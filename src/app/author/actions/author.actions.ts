import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorActions {
    
      static INCREMENT_COUNTER = '[Author] Increment Counter';
      public incrementCounter(): Action {
        return {
          type: AuthorActions.INCREMENT_COUNTER
        };
      }
      
      static LOAD_AUTHOR_LIST = '[Author] Load Author List';
      loadAuthorList(): Action {
        return {
          type: AuthorActions.LOAD_AUTHOR_LIST
        };
      }
      
      static LOAD_AUTHOR_LIST_SUCCESS = '[Author] Load Author List Success';
      loadAuthorListSuccessfull(data: any[]): Action {
        return {
          type: AuthorActions.LOAD_AUTHOR_LIST_SUCCESS,
          payload: data
        };
      }
      static LOAD_AUTHOR_LIST_ERROR = '[Author] Load Author List Error';
      loadAuthorListError(error): Action {
        return {
          type: AuthorActions.LOAD_AUTHOR_LIST_ERROR,
          payload: error
        };
      }
    }