/*eslint-disable max-nested-callbacks, no-unused-expressions*/

import {Effects} from 'redux-loop';
import sinon from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import {expect} from 'chai';
import {initialState, dispatch} from '../../../../test/state';
import * as SubscriptionStateActions from '../SubscriptionState';

describe('SubscriptionState', () => {

  // Example of how to test multiple dispatches in series
  describe('requestSubsriptions', () => {
    const isFetching = state => state.getIn(['suscriptions', 'isFetching']);

    it('should start fetching the items', () => {
      const [secondState] = dispatch(initialState, SubscriptionStateActions.requestSubsriptions());
      expect(isFetching(isFetching)).to.equal(false);
      expect(isFetching(secondState)).to.equal(true);
    });
  });
});
