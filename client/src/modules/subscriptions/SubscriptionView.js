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

  _selectItem(item) {
    this.props.dispatch(SubscriptionState.selectItem(item));
    this.props.dispatch(NavigationState.pushRoute({key: 'SubscriptionItem'}));
  },

  render() {
    let displayedItems = this.props.items.map((item) => {
      if (!item.id) {
        return;
      }
      return (
        <View key={item.id}>
          <TouchableHighlight
            onPress={() => this._selectItem(item)}
          >
            <View style={styles.item}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <ScrollView>
        {
          !this.props.isFetching &&
          <View style={styles.itemsContainer}>{displayedItems}</View>
        }
        {
          this.props.isFetching &&
          <View style={styles.spinnerContainer}>
            <Spinner
              style={styles.spinner}
              isVisible={this.props.isFetching}
              type='Bounce'
            />
          </View>
        }
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  itemsContainer: {
    flex: 1,
    marginTop: 64,
    backgroundColor: 'white',
    flexDirection: 'column'
  },
  item: {
    flex: 1,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90
  },
  title: {
    fontSize: 30
  },
  description: {
    fontSize: 15,
    color: 'grey'
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
