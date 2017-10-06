import axios from 'axios';
import { browserHistory } from 'react-router';

export const GRAB_COIN_DATA = 'GRAB_COIN_DATA';
export const grabCoinData = value => {
  console.log('coin from action', value);
  return {
    type: GRAB_COIN_DATA,
    payload: value
  }
}


export const SHOW_DATA = 'GRAB_COIN_DATA';
export const showData = value => {
  console.log('showData from action', value);
  return {
    type: SHOW_DATA,
    payload: value
  }
}
