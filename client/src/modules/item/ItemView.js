import * as ItemState from './ItemState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';

import Spinner from 'react-native-spinkit';

const ItemView = React.createClass({
  propTypes: {
    selectedItem: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
  },

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(ItemState.requestSubsriptionItem(this.props.selectedItem.id));
  },

  render() {
    let item = this.props.item;
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            !this.props.isFetching &&
            <Text style={styles.title}>{item.name}</Text>
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
  title: {
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
});

export default ItemView;
