import { combineReducers, Action, ActionReducer } from '@ngrx/store';

import peopleReducer, * as fromPeople from './author.reducers';

export interface AuthorState {
    people: fromPeople.PeopleState;
}

export default combineReducers({
    people: peopleReducer
});