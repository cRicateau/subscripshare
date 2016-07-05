import * as SubscriptionState from './SubscriptionState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Platform,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';

import {
  MKButton,
  MKColor,
  MKIconToggle,
  getTheme
} from 'react-native-material-kit';

const theme = getTheme();

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


  render() {
    var base64Icon = 'http://www.getmdl.io/assets/demos/welcome_card.jpg';
    var action = (<Text> My action</Text>);
    var menu = (
      <MKIconToggle
        checked={true}
        onCheckedChange={this._onIconChecked}
        onPress={this._onIconClicked}
      >
        <Text pointerEvents="none"
              style={styles.toggleTextOff}>Off</Text>
        <Text state_checked={true}
              pointerEvents="none"
              style={[styles.toggleText, styles.toggleTextOn]}>On</Text>
      </MKIconToggle>
    );
    let displayedItems = this.props.items.map((item) => {
      return (
        <View style={theme.cardStyle}>
            <Image source={{uri : base64Icon}} style={theme.cardImageStyle}/>
            <Text style={theme.cardTitleStyle}>Welcome</Text>
            <View  // TextView padding not handled well on Android https://github.com/facebook/react-native/issues/3233
              style={{
                padding : 15,
              }}
              >
              <Text style={[theme.cardContentStyle, {padding:0}]}>
                Journal d'information de référence en France
              </Text>
            </View>
            <View style={theme.cardMenuStyle}>{menu}</View>
            <View style={theme.cardActionStyle}>
              <Text>{item.name}</Text>
            </View>
        </View>
      );
    });

    return (
      <ScrollView>
        <View style={styles.container}>
          {displayedItems}
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
  scrollView: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
    padding: 20,
    marginTop: Platform.OS === 'android' ? 56 : 0,
  },
  row: {
    flexDirection: 'row',
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 7, marginRight: 7,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 10, marginBottom: 20,
  },
  legendLabel: {
    textAlign: 'center',
    color: '#666666',
    marginTop: 10, marginBottom: 20,
    fontSize: 12,
    fontWeight: '300',
  },
});

export default SubscriptionView;
