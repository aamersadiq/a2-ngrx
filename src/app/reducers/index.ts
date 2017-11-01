import { compose } from '@ngrx/core/src/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import authorReducer, * as fromAuthor from '../author/reducers';

export interface AppState {
    author: fromAuthor.AuthorState;
}

export default compose(storeFreeze, storeLogger(), combineReducers)({
    author: authorReducer
});