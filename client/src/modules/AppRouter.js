/*eslint-disable react/prop-types*/

import React from 'react';
import CounterViewContainer from './counter/CounterViewContainer';
import SubscriptionViewContainer from './subscriptions/SubscriptionViewContainer';
import ItemViewContainer from './item/ItemViewContainer';
import GroupViewContainer from './groups/GroupViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer />;
  }

  if (key === 'Subscription') {
    return <SubscriptionViewContainer />;
  }

  if (key === 'SubscriptionItem') {
    return <ItemViewContainer />;
  }

  if (key === 'Group') {
    console.log('group container');
    return <GroupViewContainer />;
  }

  throw new Error('Unknown navigation key: ' + key);
}
