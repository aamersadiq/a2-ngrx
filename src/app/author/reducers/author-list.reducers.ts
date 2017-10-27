import { Action, ActionReducer } from '@ngrx/store';

import { AuthorActions } from '../actions';

export interface AuthorListState {
    authors: Author[];
    filteredAuthors: Author[];
    searchText: string;
    loading: boolean;
}

const initialState: AuthorListState = {
    authors: [],
    filteredAuthors: [],
    searchText: '',
    loading: true,
};

export default (state: AuthorListState = initialState, action: Action): AuthorListState => {
    switch (action.type) {

        case AuthorActions.LOAD_AUTHOR_LIST_SUCCESS: {
            const authors: any[] = action.payload;

            return Object.assign({}, state, {
                authors,
                filteredAuthors: authors,
                loading: false
            });
        }

        case AuthorActions.LOAD_AUTHOR_LIST: {
            return state;
        }

        case AuthorActions.SEARCH_AUTHOR_LIST: {
            const searchTerm = action.payload;
            let filtered;
            if (!searchTerm) {
                filtered = state.authors;
            }
            else {
                filtered = state.authors.filter((author) => (author.firstName + author.lastName).includes(searchTerm));
            }
            return Object.assign({}, state, {
                searchText: searchTerm,
                filteredAuthors: filtered
                
            });
        }

        default: {
            return state;
        }

    }
}
