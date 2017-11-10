import authorReducer, * as fromAuthor from '../author/reducers';
import { ActionReducer, ActionReducerMap, MetaReducer, } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@env/environment';

export interface AppState {
  author: fromAuthor.AuthorState;
}

export const reducers: ActionReducerMap<AppState> = {
  author: authorReducer
};

export function logger(reducer: ActionReducer<AppState>): any {
  return storeLogger()(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

