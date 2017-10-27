import { Action, ActionReducer } from '@ngrx/store';

import { AuthorActions } from '../actions';

export interface AuthorListState {
    authors: Author[];
    loading: boolean;
}

const initialState: AuthorListState = {
    authors: [],
    loading: true,
};

export default (state = initialState, action: Action): AuthorListState => {
    switch (action.type) {

        case AuthorActions.LOAD_AUTHOR_LIST_SUCCESS: {
            const authors: any[] = action.payload;

            return Object.assign({}, state, {
                authors,
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
