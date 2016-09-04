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
  const onNavigate = props.onNavigate;
  const key = props.scene.route.key;

  if (key === 'Counter') {
    return <CounterViewContainer onNavigate={onNavigate} />;
  }

  if (key === 'Subscription') {
    return <SubscriptionViewContainer onNavigate={onNavigate} />;
  }

  if (key === 'SubscriptionItem') {
    return <ItemViewContainer onNavigate={onNavigate}/>;
  }

  if (key === 'Group') {
    console.log('group container');
    return <GroupViewContainer onNavigate={onNavigate}/>;
  }

  if (key.indexOf('Color') === 0) {
    const index = props.scenes.indexOf(props.scene);
    return (
      <ColorViewContainer
        index={index}
      />
    );
  }

  throw new Error('Unknown navigation key: ' + key);
}
