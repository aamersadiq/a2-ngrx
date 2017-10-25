import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/src/compose';
import { storeLogger } from 'ngrx-store-logger';
// import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import personReducer, * as fromPerson from '../person/reducers';

export interface AppState {
    persons: fromPerson.PersonState;
}

export default compose( combineReducers)({//storeFreeze, storeLogger(),
    person: personReducer,
});