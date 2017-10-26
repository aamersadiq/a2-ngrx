import { combineReducers, Action, ActionReducer } from '@ngrx/store';

import personReducer, * as fromPerson from './person.reducers';

export interface PersonState {
    people: fromPerson.PersonsState;
}

export default combineReducers({
    people: personReducer
});