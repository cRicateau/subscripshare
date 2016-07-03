import {connect} from 'react-redux';
import SubscriptionView from './SubscriptionView';

export default connect(
  state => ({
    items: state.getIn(['subscriptions', 'items']),
    isFetching: state.getIn(['subscriptions', 'isFetching'])
  })
)(SubscriptionView);
