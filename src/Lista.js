import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

class Lista extends Component {
  static navigationOptions = {
    header: false,
  };

  render() {
    return (
      <ImageBackground
        source={require('./background.png')}
        style={styles.container}
      />
    );
  }
}

Lista.navigationOptions = {
  tabBarLabel: 'Lista',
  tabBarIcon: ({tintColor}) => (
    <Icon name="list-alt" size={24} color={tintColor} />
  ),
};

const styles = StyleSheet.create({
  container: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});

export default Lista;
