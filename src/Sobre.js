import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

import Icon from 'react-native-vector-icons/FontAwesome';

class Sobre extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/ElvisFelix-dev'}}
        style={{marginTop: 20}}
      />
    );
  }
}

Sobre.navigationOptions = {
  tabBarLabel: 'Git',
  tabBarIcon: ({tintColor}) => (
    <Icon name="github" size={24} color={tintColor} />
  ),
};

export default Sobre;
