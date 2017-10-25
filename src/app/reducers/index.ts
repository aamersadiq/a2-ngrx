import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/src/compose';
import { storeLogger } from 'ngrx-store-logger';
// import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';

import customerReducer, * as fromCustomer from '../customer/reducers';

export interface AppState {
    customers: fromCustomer.CustomerState;
}

export default compose( combineReducers)({//storeFreeze, storeLogger(),
    customer: customerReducer,
});