import { combineReducers, Action } from '@ngrx/store';

import personReducer, * as fromPerson from './person.reducers';

export interface PersonState {
    users: fromPerson.PersonsState;
}

export default combineReducers({
    persons: personReducer,
});