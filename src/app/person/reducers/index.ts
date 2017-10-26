import { combineReducers, Action, ActionReducer } from '@ngrx/store';

import peopleReducer, * as fromPeople from './people.reducers';

export interface PersonState {
    people: fromPeople.PeopleState;
}

export default combineReducers({
    people: peopleReducer
});