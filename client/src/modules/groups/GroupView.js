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

const GroupView = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    onNavigate: PropTypes.func.isRequired
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
        <View key={group.id}>
          <TouchableHighlight
            onPress={() => this._selectGroup(group)}
          >
            <View style={styles.card}>
              <Image
                style={styles.thumbnail}
                source={{uri: group.thumbnail}}
              />
              <View style={styles.group}>
                <Text style={styles.title}>{group.name}</Text>
                <Text style={styles.description}>{group.description}</Text>
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
