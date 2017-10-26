import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class PersonActions {
    
      static INCREMENT_COUNTER = '[Person] Increment Counter';
      public incrementCounter(): Action {
        return {
          type: PersonActions.INCREMENT_COUNTER
        };
      }
      
      static LOAD_CUSTOMER_LIST = '[Person] Load Person List';
      loadPersonList(): Action {
        return {
          type: PersonActions.LOAD_CUSTOMER_LIST
        };
      }
      
      static LOAD_CUSTOMER_LIST_SUCCESS = '[Person] Load Person List Success';
      loadPersonListSuccessfull(data: any[]): Action {
        return {
          type: PersonActions.LOAD_CUSTOMER_LIST_SUCCESS,
          payload: data
        };
      }
      static LOAD_CUSTOMER_LIST_ERROR = '[Person] Load Person List Error';
      loadPersonListError(error): Action {
        return {
          type: PersonActions.LOAD_CUSTOMER_LIST_ERROR,
          payload: error
        };
      }
    }