import { Action } from '@ngrx/store';

export const LOAD_AUTHOR_LIST = '[Author] Load Author List';
export const LOAD_AUTHOR_LIST_SUCCESS = '[Author] Load Author List Success';
export const LOAD_AUTHOR_LIST_ERROR = '[Author] Load Author List Error';
export const SEARCH_AUTHOR_LIST = '[Author] Search Author List';
export const SORT_AUTHOR_LIST = '[Author] Sort Author List';

export class LoadAuthorList implements Action {
  readonly type = LOAD_AUTHOR_LIST;
  constructor() {}
}

export class LoadAuthorListSuccess implements Action {
  readonly type = LOAD_AUTHOR_LIST_SUCCESS;
  constructor(public payload: any[]) {}
}

export class LoadAuthorListError implements Action {
  readonly type = LOAD_AUTHOR_LIST_ERROR;
  constructor(public payload: any) {}
}

export class SearchAuthorList implements Action {
  readonly type = SEARCH_AUTHOR_LIST;
  constructor(public payload: string) {}
}

export class SortAuthorList implements Action {
  readonly type = SORT_AUTHOR_LIST;
  constructor(public payload: Sort) {}
}

export type All
  = LoadAuthorList
  | LoadAuthorListSuccess
  | LoadAuthorListError
  | SearchAuthorList
  | SortAuthorList

