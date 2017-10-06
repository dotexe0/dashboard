import axios from 'axios';
import { browserHistory } from 'react-router';

export const GRAB_COIN_DATA = 'GRAB_COIN_DATA';
export const grabCoinData = value => {
  console.log('coin from action', value);
}
