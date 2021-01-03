import { State } from '../../../types';

export const getStatus = (state: State) => state.login.isRegistered;
