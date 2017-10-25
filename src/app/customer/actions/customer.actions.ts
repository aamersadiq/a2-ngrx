import { Action } from '@ngrx/store';

export class CustomerActions {
    
      static LOAD_CUSTOMER_LIST = '[Customer] Load Customer List';
      loadCustomerList(): Action {
        return {
          type: CustomerActions.LOAD_CUSTOMER_LIST
        };
      }
      
      static LOAD_CUSTOMER_LIST_SUCCESS = '[Customer] Load Customer List Success';
      loadCustomerListSuccessfull(data: any[]): Action {
        return {
          type: CustomerActions.LOAD_CUSTOMER_LIST_SUCCESS,
          payload: data
        };
      }
      static LOAD_CUSTOMER_LIST_ERROR = '[Customer] Load Customer List Error';
      loadCustomerListError(error): Action {
        return {
          type: CustomerActions.LOAD_CUSTOMER_LIST_ERROR,
          payload: error
        };
      }
    }