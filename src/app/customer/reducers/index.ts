import { combineReducers, Action } from '@ngrx/store';

import customerReducer, * as fromCustomer from './customer.reducers';

export interface CustomerState {
    users: fromCustomer.CustomersState;
}

export default combineReducers({
    customers: customerReducer,
});