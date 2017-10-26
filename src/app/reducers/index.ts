


import { compose } from '@ngrx/core/src/compose';

// import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import personReducer, * as fromPerson from '../person/reducers';

export interface AppState {
    person: fromPerson.PersonState;
}

export default compose(combineReducers)({//storeFreeze, storeLogger(),
    person: personReducer
});