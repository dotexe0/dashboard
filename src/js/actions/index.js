import axios from 'axios';
// import { browserHistory } from 'react-router';
import { toastr } from 'react-redux-toastr';

const REDDIT_BASE_URI = `https://www.reddit.com/r`;

export const GRAB_COIN_DATA = 'GRAB_COIN_DATA';
export const grabCoinData = value => async dispatch => {
  console.log('coin from action', value);

  try {
    const res = await axios.get(`${REDDIT_BASE_URI}/${value}/about.json`);
      dispatch({ type: GRAB_COIN_DATA, payload: res.data });
  } catch (e) {
    toastr.error(`Error grabbing ${value} data!`);
  }
};

export const SHOW_DATA = 'SHOW_DATA';
export const showData = value => {
  console.log('showData from action', value);

  return {
    type: SHOW_DATA,
    payload: value
  }
}
