// SiteReducer.js

import { GET_SITE } from '../actions/types';

export default function SiteReducer(state = [], action) {
  switch (action.type) {
    case GET_SITE:
      return state.length !== 0 ?  state : action.sites;
    default:
      return state;
  }
}