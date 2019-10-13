import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.mainPanel}>
          <Text>Panel 1</Text>
        </View>

        <View style={styles.mainPanel}>
          <Text>Panel 2</Text>
        </View>

        <View style={styles.mainPanel}>
          <Text>Panel 3</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainPanel: {
    width: 330,
    height: 330,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  button: {
    width: 250,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb3b5a',
  },
  buttonHover: {
    transform: [
      {scale: [1.1, 1.1, 1.1]}
    ]
  }
});

export default Main;