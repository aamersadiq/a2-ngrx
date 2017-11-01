import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorActions {
    
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
      
      static SEARCH_AUTHOR_LIST = '[Author] Search Author List';
      searchAuthorList(term): Action {
        return {
          type: AuthorActions.SEARCH_AUTHOR_LIST,
          payload: term
        };
      }
      
      static SORT_AUTHOR_LIST = '[Author] Sort Author List';
      sortAuthorList(sort: Sort): Action {
        return {
          type: AuthorActions.SORT_AUTHOR_LIST,
          payload: sort
        };
      }
    }