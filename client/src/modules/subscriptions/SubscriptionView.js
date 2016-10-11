import * as SubscriptionState from './SubscriptionState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const SubscriptionView = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedGroup: PropTypes.object.isRequired,
  },

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(SubscriptionState.requestSubsriptions(this.props.selectedGroup.id))
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
            <View style={styles.card}>
              <Image
                style={styles.thumbnail}
                source={{uri: item.thumbnail}}
              />
              <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </TouchableHighlight>
        </View>
      );
    });

    return (
      <ScrollView style={styles.scrollView}>
        {
          !this.props.isFetching &&
          <View style={styles.itemsContainer}>{displayedItems}</View>
        }
        {
          this.props.isFetching &&
          <View style={styles.spinnerContainer}>
            <ActivityIndicator
              style={styles.spinner}
              animating={this.props.isFetching}
            />
          </View>
        }
      </ScrollView>
    );
  }
});

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white'
  },
  itemsContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  card: {
    flex: 1,
    borderColor: '#F1F1F1',
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  },
  description: {
    fontSize: 13,
    color: '#9B9B9B'
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    marginTop: 300
  },
  image: {
    width: 100
  },
  thumbnail: {
    height: 90,
    width: 90
  }

});

export default SubscriptionView;
