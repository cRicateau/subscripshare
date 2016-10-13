import * as SubscriptionState from './SubscriptionState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  View
} from 'react-native';
import { List, ListItem, SearchBar } from 'react-native-elements';

const SubscriptionView = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    selectedGroup: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
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
    const items = this.props.items;
    return (
      <ScrollView style={styles.scrollView}>
        <SearchBar
          lightTheme
          onChangeText={console.log}
          placeholder='Search' />
        {
          !this.props.isFetching &&
          <List>
            {
              items.map((item, i) => (
                <ListItem
                  onPress={() => this._selectItem(item)}
                  roundAvatar
                  avatar={{uri: item.thumbnail}}
                  key={i}
                  roundAvatar
                  title={item.name}
                  subtitle={item.description}
                />
              ))
            }
          </List>
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
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  spinner: {
    marginTop: 300
  }
});

export default SubscriptionView;
