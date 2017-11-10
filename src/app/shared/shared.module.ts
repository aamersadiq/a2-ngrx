import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/meta.reducer';

import { environment } from '@env/environment';

@NgModule({
  declarations: [
  ],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }) : [ ]
  ],
  exports: 
  [
  ],
  providers: [
    
  ],
})
export class SharedModule { }
