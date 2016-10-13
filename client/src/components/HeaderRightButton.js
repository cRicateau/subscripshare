import React, {PropTypes} from 'react';
import { Icon } from 'react-native-elements'

const HeaderRightButton = React.createClass({
  displayName: 'TabBar',
  propTypes: {
    iconName: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired
  },

  render() {
    return (
      <Icon
        name={this.props.iconName}
        color='white'
        size={30}
        underlayColor='transparent'
        containerStyle={styles.containerStyle}
        onPress={this.props.onPress}
      />
    );
  }
});

const styles = {
  containerStyle: {
    marginRight: 10,
    marginTop: 8,
  }
}


export default HeaderRightButton;
