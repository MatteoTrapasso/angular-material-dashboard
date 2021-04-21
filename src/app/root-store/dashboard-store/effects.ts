import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs';
import {Action} from '@ngrx/store';
import * as actions from './actions';

import {
  createCall,
  createCatchError,
  createManyCall,
  createManyCatchError,
  createManyResponse,
  createResponse,
  deleteCall,
  deleteCatchError,
  deleteManyCall,
  deleteManyCatchError,
  deleteManyResponse,
  deleteResponse,
  editCall,
  editCatchError,
  editManyCall,
  editManyCatchError,
  editManyResponse,
  editResponse,
  searchCall,
  searchCatchError,
  searchResponse,
  selectCall,
  selectCatchError,
  selectResponse
} from 'ngrx-entity-crud';
import {repeat} from 'rxjs/operators';
import {DashboardService} from '../../modules/dashboard.service';
import {Dashboard} from '../../main/models/vo/dashboard';

@Injectable()
export class DashboardStoreEffects {
  constructor(private readonly actions$: Actions, private readonly service: DashboardService) {
  }

}
