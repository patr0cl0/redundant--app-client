// Ducks: Redux Reducer Bundles
// https://github.com/erikras/ducks-modular-redux
// A proposal for bundling reducers, action types and actions when using Redux
import axios from 'axios';

const {
  API_URL = 'http://localhost:8000'
} = process.env

// Actions
const SEND_TEXT = 'toolbox/requests/SEND_TEXT';

const initalState = null;

// Reducer
export default function reducer(state = initalState, action = {}) {
  switch (action.type) {
    case SEND_TEXT:
      return {
        ...state,
        ...action.payload,
      }

    default: return state;
  }
}

const sendTextSuccess = payload => ({
  type: SEND_TEXT,
  payload
})

export const sendTextRequest = text => async dispatch => {
  try {
    const res = await axios.get(API_URL, { params: { text } })

    const response = {
      status: res.status,
      statusText: res.statusText,
      data: res.data,
      headers: res.headers,
    };

    dispatch(sendTextSuccess(response))
  } catch (error) {
    throw error;
  }
};
