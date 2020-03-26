import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import TelaInicial from './src/TelaInicial';
import Salao from './src/Salao';
import Lista from './src/Lista';
import Sobre from './src/Sobre';

const AppNavigator = createBottomTabNavigator(
  {
    TelaInicial: {
      screen: TelaInicial,
    },
    Salao: {
      screen: Salao,
    },
    Lista: {
      screen: Lista,
    },
    Sobre: {
      screen: Sobre,
    },
  },
  {
    initialRouteName: 'TelaInicial',

    defaultNavigationOptions: {
      headerTitle: 'Assistente Indicador',
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
