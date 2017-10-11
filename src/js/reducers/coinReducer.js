import { GRAB_COIN_DATA } from '../actions';
const initialState = {

}

export default (state=initialState, action) => {
  switch(action.type) {
    case GRAB_COIN_DATA:
      console.log('coin data from reducer', action.payload);
      return {
        ...state,
        [action.payload.data]: action.payload.data
      }
    default:
      return state;
  }
}
