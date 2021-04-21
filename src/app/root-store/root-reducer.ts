import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {State} from './state';


export interface AppState {
}

export const reducers: ActionReducerMap<AppState> = {};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
