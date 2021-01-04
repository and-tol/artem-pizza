// Types
import { State } from '../../../types';

export const getAcceptedOrder = (state: State): boolean =>
  state.checkout.isAccepted;
