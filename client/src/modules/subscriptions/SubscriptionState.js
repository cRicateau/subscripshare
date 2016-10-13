import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import config from '../config'

// Initial state
const initialState = Map({
  isFetching: false,
  items: []
});

// Actions
const SELECT_ITEM = 'SELECT_ITEM';
const REQUEST_SUBSCRIPTIONS = 'REQUEST_SUBSCRIPTIONS';
const RECEIVE_SUBSCRIPTIONS_SUCCESS = 'RECEIVE_SUBSCRIPTIONS_SUCCESS';
const RECEIVE_SUBSCRIPTIONS_FAILURE = 'RECEIVE_SUBSCRIPTIONS_FAILURE';

// Action creators
export function requestSubsriptions(groupId) {
  return {
    type: REQUEST_SUBSCRIPTIONS,
    payload: groupId
  };
}

function receiveSubscriptions(payload) {
  return {
    type: RECEIVE_SUBSCRIPTIONS_SUCCESS,
    payload: payload
  };
}

function receiveSubscriptionsFailure() {
  return {
    type: RECEIVE_SUBSCRIPTIONS_FAILURE
  };
}

export function fetchSubscriptions(groupId) {
  return fetch(`${config.baseUrl}/subscriptions/findByGroup/${groupId}`)
    .then(response => response.json())
    .then(receiveSubscriptions)
    .catch(receiveSubscriptionsFailure);
}

export function selectItem(item) {
  return {
    type: SELECT_ITEM,
    payload: item
  };
}

// Reducer
export default function SubscriptionStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_SUBSCRIPTIONS:
      return loop(
        state.set('isFetching', true),
        Effects.promise(fetchSubscriptions, action.payload)
      );

    case RECEIVE_SUBSCRIPTIONS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('items', action.payload);

    case RECEIVE_SUBSCRIPTIONS_FAILURE:
      return state
        .set('isFetching', false);

    case SELECT_ITEM:
      return state
        .set('selectedItem', action.payload)

    default:
      return state;

  }
}
