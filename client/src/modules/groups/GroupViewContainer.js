import {connect} from 'react-redux';
import GroupView from './GroupView';

export default connect(
  state => ({
    groups: state.getIn(['groups', 'groups']),
    isFetching: state.getIn(['groups', 'isFetching'])
  })
)(GroupView);
