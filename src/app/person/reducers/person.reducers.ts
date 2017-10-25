import { Action } from '@ngrx/store';

import { PersonActions } from '../actions';

export interface PersonsState {
    entities: any;
    loading: boolean;
}

const initialState: PersonsState = {
    entities: [],
    loading: true
};

export default function (state = initialState, action: Action): PersonsState {
    switch (action.type) {

        case PersonActions.LOAD_CUSTOMER_LIST: {
            return Object.assign({}, state, { loading: true });
        }

        case PersonActions.LOAD_CUSTOMER_LIST_SUCCESS: {
            const persons: any[] = action.payload;
      
            return Object.assign({}, state, {
              entities: Object.assign({}, state.entities, persons),
              loading: false
            });
          }
        default: {
            return state;
          }

    }
}