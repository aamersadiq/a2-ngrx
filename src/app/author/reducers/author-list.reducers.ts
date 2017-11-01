import { Action, ActionReducer } from '@ngrx/store';
import * as _ from 'lodash';

import { AuthorActions } from '../actions';

enum AuthorSortBy {
    id,
    firstName,
    lastName
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
    isAscending: true 
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
            const searchTerm: string = action.payload;
            return Object.assign({}, state, {
                searchText: searchTerm,
                displayedItems: getDisplayedItems({
                    dataSet: state.authors,
                    sortBy: state.sortBy,
                    isAscending: state.isAscending,
                    searchTerm: searchTerm,
                })
                
            });
        }
        
        case AuthorActions.SORT_AUTHOR_LIST: {
            return Object.assign({}, state, {
                sortBy: action.payload.sortBy,
                isAscending: action.payload.isAscending,
                displayedItems: getDisplayedItems({
                    dataSet: state.authors,
                    searchTerm: state.searchText,                    
                    sortBy: action.payload.sortBy,
                    isAscending: action.payload.isAscending
                })
                
            });
        }

        default: {
            return state;
        }
    }
}

function getDisplayedItems(options) {
    options.searchTerm = options.searchTerm || '';
    options.isAscending = options.isAscending === undefined ? true : options.isAscending;
    options.sortBy = options.sortBy || AuthorSortBy.id;
    let sortOperator: any;
    switch (options.sortBy) {
        case AuthorSortBy[AuthorSortBy.firstName]:
            sortOperator = (a: Author) => a.firstName
            break
        case AuthorSortBy[AuthorSortBy.lastName]:
            sortOperator = (a: Author) => a.lastName
            break
        default:
            sortOperator = (a: Author) => a.id
            break
    }

    return _(options.dataSet)
        .filter((aut: Author) => aut.firstName.toUpperCase().includes(options.searchTerm.toUpperCase())
        || aut.lastName.toUpperCase().includes(options.searchTerm.toUpperCase()))
         .orderBy([sortOperator], [options.isAscending ? 'asc' : 'desc'])
        .value()
}
