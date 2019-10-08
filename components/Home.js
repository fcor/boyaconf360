import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  Environment,
} from 'react-360';

class Home extends React.Component {
  constructor(props) {
    super(props);
    Environment.setBackgroundImage(
      asset('space3.jpg'),
      {rotateTransform: [{rotateX: '180deg'}]},
    );
  }
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.container}>
          <Image style={styles.image} 
                source={asset('boyaconf.png')} 
          />
          <View style={styles.textContainer}>
            <Text style={[styles.tagOpen, styles.text]}>
              {`<`}
            </Text>
            <Text style={styles.text}>
              BoyaConf
            </Text>
            <Text style={[styles.tagClose, styles.text]}>
              {`>`}
            </Text>
          </View>
          <Text style={styles.textDate}>
            Noviembre 9, 2019
          </Text>
          <Text style={styles.textLocation}>
            Duitama, Boyacá, Colombia
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    // backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  textContainer: {
    width: 500,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagOpen: {
    color: '#4dcc89',
  },
  tagClose: {
    color: '#eb3b5a',
  },
  text: {
    fontSize: 90,
    fontWeight: 'bold',
  },
  textDate: {
    fontSize: 70,
    fontWeight: 'bold',
  },
  textLocation: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Home;