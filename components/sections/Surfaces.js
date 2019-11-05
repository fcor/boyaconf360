import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  asset,
} from 'react-360';


class Surfaces extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("cylinder.png")} />
          <Text style={styles.text}>
            Cylinder
          </Text>
        </View>
        <View style={styles.paneContainer}>
          <Image style={styles.image} source={asset("flat.png")} />
          <Text style={styles.text}>
            Flat
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 480,
  },
  paneContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default Surfaces;
