import { combineReducers, Action, ActionReducer } from '@ngrx/store';

import personReducer, * as fromPerson from './people.reducers';

export interface PersonState {
    people: fromPerson.PeopleState;
}

export default combineReducers({
    people: personReducer
});