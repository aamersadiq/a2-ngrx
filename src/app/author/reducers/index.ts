import { combineReducers, Action, ActionReducer } from '@ngrx/store';

import authorListReducer, * as fromAuthorList from './author-list.reducers';

export interface AuthorState {
    authorList: fromAuthorList.AuthorListState;
    // auther: Author
}

export default combineReducers({
    authorList: authorListReducer
});