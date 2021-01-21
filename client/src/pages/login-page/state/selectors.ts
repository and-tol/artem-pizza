import { RootState } from '../../../init/rootReducer';

export const getStatus = (state: RootState) => state.login.isRegistered;
