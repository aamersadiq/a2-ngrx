import { Action } from '@ngrx/store';

import { CustomerActions } from '../actions';

export interface CustomersState {
    entities: any;
    loading: boolean;
}

const initialState: CustomersState = {
    entities: [],
    loading: true
};

export default function (state = initialState, action: Action): CustomersState {
    switch (action.type) {

        case CustomerActions.LOAD_CUSTOMER_LIST: {
            return Object.assign({}, state, { loading: true });
        }

        case CustomerActions.LOAD_CUSTOMER_LIST_SUCCESS: {
            const customers: any[] = action.payload;
      
            return Object.assign({}, state, {
              entities: Object.assign({}, state.entities, customers),
              loading: false
            });
          }
        default: {
            return state;
          }

    }
}