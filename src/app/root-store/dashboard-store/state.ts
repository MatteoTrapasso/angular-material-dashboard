import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Dashboard} from '../../main/models/vo/dashboard';


export const adapter: EntityCrudAdapter<Dashboard> = createCrudEntityAdapter<Dashboard>({
  selectId: model => Dashboard.selectUserId(model),
});

export interface State extends EntityCrudState<Dashboard> {
}

export const initialState: State = adapter.getInitialCrudState();
