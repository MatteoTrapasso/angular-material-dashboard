import {InjectionToken, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducer, StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {DashboardStoreEffects} from './effects';
import {featureReducer} from './reducer';
import {Names} from './names';
import {Dashboard} from '../../main/models/vo/dashboard';

export const INJECTION_TOKEN = new InjectionToken<ActionReducer<Dashboard>>(`${Names.NAME}-store Reducers`);

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(Names.NAME, INJECTION_TOKEN),
    EffectsModule.forFeature([DashboardStoreEffects]),
  ],
  declarations: [],
  providers: [DashboardStoreEffects,
    {
      provide: INJECTION_TOKEN,
      useFactory: (): ActionReducer<Dashboard> => featureReducer
    }]
})
export class DashboardStoreModule {
}
