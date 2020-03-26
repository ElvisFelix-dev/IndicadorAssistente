import React, {Component} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {Background, TextoInput, Botao, TextoBotao} from './styles';

class TelaInicial extends Component {
  static navigationOptions = {
    title: 'Mapa Do Salão',
    header: false,
  };
  render() {
    return (
      <Background>
        <TextoInput
          placeholder="Nome"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextoInput
          placeholder="Cidade"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextoInput
          placeholder="Congregação"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <Botao
          title="Salao"
          onPress={() => this.props.navigation.navigate('Salao')}>
          <TextoBotao>Entrar</TextoBotao>
        </Botao>
      </Background>
    );
  }
}

TelaInicial.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({tintColor}) => <Icon name="home" size={24} color={tintColor} />,
};

export default TelaInicial;
