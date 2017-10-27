import { Action, ActionReducer } from '@ngrx/store';

import { AuthorActions } from '../actions';

export interface PeopleState {
    entities: Author[];
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

        case AuthorActions.INCREMENT_COUNTER: {
            let newCount = state.counter;
            newCount++;
            return Object.assign({}, state, { counter: newCount });
        }

        case AuthorActions.LOAD_AUTHOR_LIST_SUCCESS: {
            const authors: any[] = action.payload;

            return Object.assign({}, state, {
                entities: [...state.entities, ...authors],
                loading: false
            });
        }

        case AuthorActions.LOAD_AUTHOR_LIST: {
            return state;
        }

        default: {
            return state;
        }

    }
}


// export default (state = initialState, action: Action) : ActionReducer<AuthorsState>=> {
//     switch (action.type) {

//         case AuthorActions.LOAD_AUTHOR_LIST: {
//             return Object.assign({}, state, { loading: true });
//         }

//         case AuthorActions.LOAD_AUTHOR_LIST_SUCCESS: {
//             const authors: any[] = action.payload;

//             return Object.assign({}, state, {
//               entities: Object.assign({}, state.entities, authors),
//               loading: false
//             });
//           }
//         default: {
//             return state;
//           }

//     }
// };