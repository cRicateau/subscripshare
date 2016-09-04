import * as ItemState from './ItemState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  View,
  Dimensions,
  ActivityIndicator
} from 'react-native';

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
      <ScrollView style={styles.scrollView}>
        {
          !this.props.isFetching &&
          <View style={styles.container}>
            <Image
              style={styles.imageCover}
              resizeMode="contain"
              source={{uri: item.imageCover}}
            />
            <Text style={styles.description}>{item.longDescription}</Text>
            <Text style={styles.price}>Prix: {item.price}€/mois</Text>
            <Text style={styles.password}>Password: {item.password}</Text>
            </View>
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
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageCover: {
    width: Dimensions.get('window').width * 0.9,
    height: 200,
    backgroundColor: 'white'
  },
  title: {
    marginTop: 50,
    fontSize: 30
  },
  description: {
    fontSize: 15,
    color: 'grey',
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  price: {
    fontSize: 20,
    marginTop: 50
  },
  password: {
    marginTop: 10
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
