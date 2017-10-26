import { compose } from '@ngrx/core/src/compose';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import personReducer, * as fromPerson from '../person/reducers';

export interface AppState {
    person: fromPerson.PersonState;
}

export default compose(storeFreeze, storeLogger(),combineReducers)({
    person: personReducer
});