import * as SubscriptionState from './SubscriptionState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const SubscriptionView = React.createClass({
  propTypes: {
    items: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
  },

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(SubscriptionState.requestSubsriptions())
  },


  render() {
    const loadingStyle = this.props.isFetching
      ? {backgroundColor: '#eee'}
      : null;

    const { isFetching } = this.props
    console.log('isFetching', isFetching);

    return (
      <View style={styles.container}>
        <Text style={styles.counter}>
          SUBSCRIPTIONS
        </Text>
        <Text style={styles.counter}>
          isFetching={isFetching}
        </Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  }
});

export default SubscriptionView;
