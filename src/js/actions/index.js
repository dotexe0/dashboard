import axios from 'axios';
import ListOfCoins from '../components/ListOfCoins';
// import { browserHistory } from 'react-router';
import { toastr } from 'react-redux-toastr';

const TWITTER_API_KEY = '2e6b0068c28b39eed4603f6a64652f8e';
const REDDIT_BASE_URI = `https://www.reddit.com/r`;
const TWITTER_URI = `http://api.twittercounter.com/?apikey=${TWITTER_API_KEY}&twitter_id=`;

export const GRAB_COIN_DATA = 'GRAB_COIN_DATA';
export const grabCoinData = value => async dispatch => {
  // console.log('coin from action', value);

  try {
    const res_reddit = await axios.get(`${REDDIT_BASE_URI}/${value}/about.json`);
    const res_twitter = await axios.get(`${TWITTER_URI}${ListOfCoins[value].twitterID}`);

      dispatch({ type: GRAB_COIN_DATA, payload: {reddit: res_reddit.data, twitter: res_twitter.data }});
      toastr.success(`Data successfully retrieved for ${value}`)
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
