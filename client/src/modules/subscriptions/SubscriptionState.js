import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = Map({
  isFetching: false,
  items: []
});

// Actions
const REQUEST_SUBSCRIPTIONS = 'REQUEST_SUBSCRIPTIONS';
const RECEIVE_SUBSCRIPTIONS_SUCCESS = 'RECEIVE_SUBSCRIPTIONS_SUCCESS';
const RECEIVE_SUBSCRIPTIONS_FAILURE = 'RECEIVE_SUBSCRIPTIONS_FAILURE';

// Action creators
export function requestSubsriptions() {
  return {
    type: REQUEST_SUBSCRIPTIONS
  };
}

function receiveSubscriptions(json) {
  return {
    type: RECEIVE_SUBSCRIPTIONS_SUCCESS,
    payload: json.data.children.map(child => child.data)
  };
}

function receiveSubscriptionsFailure() {
  return {
    type: RECEIVE_SUBSCRIPTIONS_FAILURE
  };
}

export function fetchSubscriptions() {
  return fetch('http://0.0.0.0:8000/api/subscriptions')
    .then(response => {
      console.log('response', JSON.parse(response._bodyInit));
      return response.json();
    })
    .then(json => receiveSubscriptions(json))
    .catch(receiveSubscriptionsFailure);
}

// Reducer
export default function SubscriptionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_SUBSCRIPTIONS:
      return loop(
        state.set('isFetching', true),
        Effects.promise(fetchSubscriptions)
      );

    case RECEIVE_SUBSCRIPTIONS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('items', action.payload);

    case RECEIVE_SUBSCRIPTIONS_FAILURE:
      return state
        .set('isFetching', false);
    default:
      return state;

  }
}
