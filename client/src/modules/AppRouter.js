/*eslint-disable react/prop-types*/

import React from 'react';
import SubscriptionViewContainer from './subscriptions/SubscriptionViewContainer';
import ItemViewContainer from './item/ItemViewContainer';
import GroupViewContainer from './groups/GroupViewContainer';

/**
 * AppRouter is responsible for mapping a navigator scene to a view
 */
export default function AppRouter(props) {
  const onNavigate = props.onNavigate;
  const key = props.scene.route.key;

  if (key === 'Subscription') {
    return <SubscriptionViewContainer onNavigate={onNavigate} />;
  }

  if (key === 'SubscriptionItem') {
    return <ItemViewContainer onNavigate={onNavigate}/>;
  }

  if (key === 'Group') {
    return <GroupViewContainer onNavigate={onNavigate}/>;
  }

  throw new Error('Unknown navigation key: ' + key);
}
