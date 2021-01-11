// Types
import { RootState } from '../../../init/rootReducer';

export const getAcceptedOrder = (state: RootState): boolean =>
  state.checkout.isAccepted;
