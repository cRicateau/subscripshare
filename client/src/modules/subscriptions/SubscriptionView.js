import * as SubscriptionState from './SubscriptionState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import {Button, Card} from 'react-native-material-design';

import Spinner from 'react-native-spinkit';

const SubscriptionView = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
  },

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(SubscriptionState.requestSubsriptions())
  },

  _onPressButton(item) {
    this.props.dispatch(SubscriptionState.goToItem(item));
    this.props.dispatch(NavigationState.pushRoute({key: 'SubscriptionItem'}));
  },

  render() {
    let displayedItems = this.props.items.map((item) => {
      return (
        <View key={item.id}>
          <TouchableHighlight onPress={() => this._onPressButton(item)}>
            <Text style={styles.items}>{item.name}</Text>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          {
            !this.props.isFetching &&
            displayedItems
          }
        </View>
        <View style={styles.spinnerContainer}>
          <Spinner
            style={styles.spinner}
            isVisible={this.props.isFetching}
            type='Bounce'
          />
        </View>
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  items: {
    marginTop: 30
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    marginTop: 100
  },
  image: {
    width: 100
  }
});

export default SubscriptionView;
