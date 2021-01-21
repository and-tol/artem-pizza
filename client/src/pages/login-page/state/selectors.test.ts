import { getStatus } from './selectors'
import {state} from '../../../__mock__/state'

describe('.getStatus', () => {
  it("returns login status of user from state", () => {

    expect(getStatus(state)).toEqual(false)
  })
});