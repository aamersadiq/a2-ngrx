
import { combineReducers, Action, ActionReducer } from '@ngrx/store';

import { AuthorEffects } from './author.effects';
import { AuthorService } from './author.service';
import authorListReducer, * as fromAuthorList from './author-list.reducers';

export * from './author.effects';
export * from './author.service';
export * from './author.actions'

export const services =  [
    AuthorService
];

export const effects =  [
    AuthorEffects
];

export interface AuthorState {
    authorList: fromAuthorList.AuthorListState;
    // author: Author
}

export default combineReducers({
    authorList: authorListReducer
});
