import { Action, ActionReducer } from '@ngrx/store';

import { PersonActions } from '../actions';

export interface PeopleState {
    entities: Person[];
    loading: boolean;
    counter: number;
}

const initialState: PeopleState = {
    entities: [],
    loading: true,
    counter: 0
};

export default (state = initialState, action: Action): PeopleState => {
    switch (action.type) {

        case PersonActions.INCREMENT_COUNTER: {
            let newCount = state.counter;
            newCount++;
            return Object.assign({}, state, { counter: newCount });
        }

        case PersonActions.LOAD_PERSON_LIST_SUCCESS: {
            const persons: any[] = action.payload;

            return Object.assign({}, state, {
                entities: Object.assign({}, state.entities, persons),
                loading: false
            });
        }

        case PersonActions.LOAD_PERSON_LIST: {
            return Object.assign({}, state, { loading: true });
        }

        default: {
            return state;
        }

    }
}


// export default (state = initialState, action: Action) : ActionReducer<PersonsState>=> {
//     switch (action.type) {

//         case PersonActions.LOAD_PERSON_LIST: {
//             return Object.assign({}, state, { loading: true });
//         }

//         case PersonActions.LOAD_PERSON_LIST_SUCCESS: {
//             const persons: any[] = action.payload;

//             return Object.assign({}, state, {
//               entities: Object.assign({}, state.entities, persons),
//               loading: false
//             });
//           }
//         default: {
//             return state;
//           }

//     }
// };