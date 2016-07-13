import {connect} from 'react-redux';
import ItemView from './ItemView';

export default connect(
  state => ({
    item: state.getIn(['item', 'item']),
    selectedItem: state.getIn(['subscriptions', 'selectedItem']),
    isFetching: state.getIn(['item', 'isFetching'])
  })
)(ItemView);
