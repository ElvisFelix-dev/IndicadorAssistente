import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

import Assistencia from './Assistencia';

import Icon from 'react-native-vector-icons/FontAwesome';

class Salao extends Component {
  static navigationOptions = {
    header: false,
  };

  render() {
    return (
      <ImageBackground
        source={require('./Tela_Principal.png')}
        style={styles.container}>
        <Assistencia />
      </ImageBackground>
    );
  }
}

Salao.navigationOptions = {
  tabBarLabel: 'Salao',
  tabBarIcon: ({tintColor}) => (
    <Icon name="building" size={24} color={tintColor} />
  ),
};

export default Salao;

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

  TextCong: {
    fontSize: 20,
    marginBottom: 10,
  },
});
