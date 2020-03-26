import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import Iconn from 'react-native-vector-icons/FontAwesome5';

class Assistencia extends Component {
  static navigationOptions = {
    header: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.fileiraJanela}>
          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.icon} onPress={() => {}}>
            <Iconn name="user" size={25} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Assistencia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },

  fileiraJanela: {
    paddingRight: 365,
    paddingTop: 57,
  },

  icon: {
    marginBottom: 9,
  },
});

/* essa deu certo com a primeira fileira

 fileiraJanela: {
    paddingRight: 365,
    paddingTop: 57,
  },

  icon: {
    marginBottom: 9,
  },
*/
