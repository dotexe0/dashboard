import { GRAB_COIN_DATA } from '../actions';
const initialState = {
    BTC: {
      reddit: [],
      twitter: []
    },
    ETH: {
      reddit: [],
      twitter: []
    }
}

export default (state=initialState, action) => {
  switch(action.type) {
    case GRAB_COIN_DATA:
    console.log(state);
      console.log('coin data from reducer', action.payload);
      const { value, reddit, twitter } = action.payload;

      if (value == 'Bitcoin') {
        return {
          ...state,
          BTC: {
            reddit: [...state.BTC.reddit, reddit.data.subscribers],
            twitter: [...state.BTC.twitter, twitter.followersperdate]
          }
        }
      }
        if (value == 'Ethereum') {
          return {
            ...state,
            ETH: {
              reddit: [...state.ETH.reddit, reddit.data.subscribers],
              twitter: [...state.ETH.twitter, twitter.followersperdate]
            }
          }
      }

    default:
      return state;
  }
}
