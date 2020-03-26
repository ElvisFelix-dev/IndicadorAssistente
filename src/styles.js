import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Background = styled(LinearGradient).attrs({
  colors: ['#625D5D', '#403B3B'],
})`
  flex: 1;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const TextoInput = styled.TextInput`
  background-color: #fff;
  width: 70%;
  margin-bottom: 15px;
  color: #222;
  font-size: 20;
  border-radius: 7px;
  padding: 10px;
`;

export const Botao = styled.TouchableOpacity`
  width: 50%;
  height: 45px;
  color: #fff;
  margin-top: 15px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const TextoBotao = styled.Text`
  font-size: 25px;
  color: #fff;
`;

/*
(LinearGradient).attrs({
  colors: ['#0D0000', '#715252', '#181717'],
*/
