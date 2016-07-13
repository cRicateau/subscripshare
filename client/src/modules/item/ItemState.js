import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';

// Initial state
const initialState = Map({
  isFetching: false,
  item: {}
});

// Actions
const REQUEST_SUBSCRIPTION_ITEM = 'REQUEST_SUBSCRIPTION_ITEM';
const RECEIVE_SUBSCRIPTION_ITEM_SUCCESS = 'RECEIVE_SUBSCRIPTION_ITEM_SUCCESS';
const RECEIVE_SUBSCRIPTION_ITEM_FAILURE = 'RECEIVE_SUBSCRIPTION_ITEM_FAILURE';

// Action creators
export function requestSubsriptionItem(itemId) {
  return {
    type: REQUEST_SUBSCRIPTION_ITEM,
    payload: itemId
  };
}

function receiveSubscriptionItem(payload) {
  return {
    type: RECEIVE_SUBSCRIPTION_ITEM_SUCCESS,
    payload: payload
  };
}

function receiveSubscriptionItemFailure() {
  return {
    type: RECEIVE_SUBSCRIPTION_ITEM_FAILURE
  };
}

export function fetchSubscriptionItem(itemId) {
  console.log('item', itemId);
  return fetch(`http://0.0.0.0:8000/api/subscriptions/${itemId}`)
    .then(response => response.json())
    .then(receiveSubscriptionItem)
    .catch(receiveSubscriptionItemFailure);
}

// Reducer
export default function ItemStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_SUBSCRIPTION_ITEM:
      return loop(
        state.set('isFetching', true),
        Effects.promise(fetchSubscriptionItem, action.payload)
      );

    case RECEIVE_SUBSCRIPTION_ITEM_SUCCESS:
      return state
        .set('isFetching', false)
        .set('item', action.payload);

    case RECEIVE_SUBSCRIPTION_ITEM_FAILURE:
      return state
        .set('isFetching', false);

    default:
      return state;
  }
}
