import { Action, ActionReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as _ from 'lodash';

import * as authorActions from './author.actions';

enum AuthorSortBy {
    id,
    firstName,
    lastName
}

export interface AuthorState extends EntityState<Author> {
    displayedItems: Author[];
    searchText: string;
    loading: boolean;
    sortBy: AuthorSortBy;
    isAscending: boolean;
}

export const adapter: EntityAdapter<Author> = createEntityAdapter<Author>();

const initialState: AuthorState = adapter.getInitialState({
    displayedItems: [],
    searchText: '',
    loading: true,
    sortBy: AuthorSortBy.id,
    isAscending: true
  });

export default (state: AuthorState = initialState, action: authorActions.All): AuthorState => {
    switch (action.type) {

        case authorActions.LOAD_AUTHOR_LIST_SUCCESS: {
            return {
                ...adapter.addAll(action.payload, state),
                displayedItems: [...action.payload],
                loading: false
            };
        }

        case authorActions.LOAD_AUTHOR_LIST: {
            return state;
        }

        case authorActions.SEARCH_AUTHOR_LIST: {
            const searchTerm: string = action.payload;
            return {
                ...state,
                searchText: searchTerm,
                displayedItems: displayedItemsItems({
                    dataSet: adapter.getSelectors().selectAll(state),
                    sortBy: state.sortBy,
                    isAscending: state.isAscending,
                    searchTerm: searchTerm,
                })
                
            };
        }
        
        case authorActions.SORT_AUTHOR_LIST: {
            return {
                ...state,
                sortBy: action.payload.sortBy,
                isAscending: action.payload.isAscending,
                displayedItems: displayedItemsItems({
                    dataSet: adapter.getSelectors().selectAll(state),
                    searchTerm: state.searchText,                    
                    sortBy: action.payload.sortBy,
                    isAscending: action.payload.isAscending
                })
            };
        }

        default: {
            return state;
        }
    }
}

export const getAuthorsState = createFeatureSelector<AuthorState>('authors');
export const getDisplayedItemsState = createSelector(
    getAuthorsState,
    state => state.displayedItems
  );
export const getLoadingState = createSelector(
    getAuthorsState,
    state => state.loading
  );

const displayedItemsItems =(options) => {
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
