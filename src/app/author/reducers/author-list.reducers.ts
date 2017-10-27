import { Action, ActionReducer } from '@ngrx/store';

import { AuthorActions } from '../actions';

export enum AuthorSortBy {
    id,
    firstName,
    LastName
}

export interface AuthorListState {
    authors: Author[];
    displayedItems: Author[];
    searchText: string;
    loading: boolean;
    sortBy: AuthorSortBy;
    isAscending: boolean;
}

const initialState: AuthorListState = {
    authors: [],
    displayedItems: [],
    searchText: '',
    loading: true,
    sortBy: AuthorSortBy.id,
    isAscending: true // https://www.wintellect.com/using-redux-manage-angular2-application-state/
};

export default (state: AuthorListState = initialState, action: Action): AuthorListState => {
    switch (action.type) {

        case AuthorActions.LOAD_AUTHOR_LIST_SUCCESS: {
            const authors: any[] = action.payload;

            return Object.assign({}, state, {
                authors,
                displayedItems: authors,
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
                displayedItems: filtered
                
            });
        }

        default: {
            return state;
        }

    }
}
