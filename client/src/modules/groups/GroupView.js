import * as GroupState from './GroupState';
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

import { Card, ListItem, Button } from 'react-native-elements';

const GroupView = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  },

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(GroupState.requestGroups())
  },

  _selectGroup(group) {
    this.props.dispatch(GroupState.selectGroup(group));
    this.props.dispatch(NavigationState.pushRoute({key: 'Subscription'}));
  },

  render() {
    let displayedgroups = this.props.groups.map((group) => {
      if (!group.id) {
        return;
      }
      return (
        <Card
          key={group.id}
          title={group.name}
          image={{uri: group.thumbnail}}>
          <Text style={{marginBottom: 10}}>
            {group.description}
          </Text>
          <Button
            small
            icon={{name: 'code'}}
            raise='true'
            onPress={() => this._selectGroup(group)}
            backgroundColor='#03A9F4'
            //fontFamily='Lato'
            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='OPEN' />
        </Card>
      );
    });

    return (
      <ScrollView style={styles.scrollView}>
        {
          !this.props.isFetching &&
          <View style={styles.groupsContainer}>{displayedgroups}</View>
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
  groupsContainer: {
    flex: 1,
    marginTop: 64,
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
  group: {
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

export default GroupView;
