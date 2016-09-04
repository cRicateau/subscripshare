import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import config from '../config'

// Initial state
const initialState = Map({
  isFetching: false,
  groups: []
});

// Actions
const SELECT_GROUP = 'SELECT_GROUP';
const REQUEST_GROUPS = 'REQUEST_GROUPS';
const RECEIVE_GROUPS_SUCCESS = 'RECEIVE_GROUPS_SUCCESS';
const RECEIVE_GROUPS_FAILURE = 'RECEIVE_GROUPS_FAILURE';

// Action creators
export function requestGroups() {
  return {
    type: REQUEST_GROUPS
  };
}

function receiveGroups(payload) {
  return {
    type: RECEIVE_GROUPS_SUCCESS,
    payload: payload
  };
}

function receiveGroupsFailure() {
  return {
    type: RECEIVE_GROUPS_FAILURE
  };
}

export function fetchGroups() {
  return fetch(`${config.baseUrl}/usergroups`)
    .then(response => response.json())
    .then(receiveGroups)
    .catch(receiveGroupsFailure);
}

export function selectGroup(group) {
  return {
    type: SELECT_GROUP,
    payload: group
  };
}

// Reducer
export default function GroupStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case REQUEST_GROUPS:
      return loop(
        state.set('isFetching', true),
        Effects.promise(fetchGroups)
      );

    case RECEIVE_GROUPS_SUCCESS:
      return state
        .set('isFetching', false)
        .set('groups', action.payload);

    case RECEIVE_GROUPS_FAILURE:
      return state
        .set('isFetching', false);

    case SELECT_GROUP:
      return state
        .set('selectedGroup', action.payload)

    default:
      return state;

  }
}
