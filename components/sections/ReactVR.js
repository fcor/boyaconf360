import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  asset,
} from 'react-360';


class ReactVR extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftPane}>
          <View style={styles.brandContainer}>
            <Image style={styles.oculus} source={asset("oculus.png")} />
            <Text style={styles.text}>
              Oculus
            </Text>
          </View>
          <View style={styles.brandContainer}>
            <Image style={styles.facebook} source={asset("facebook.png")} />
            <Text style={styles.text}>
              Facebook
            </Text>
          </View>
        </View>
        <View>
          <Image style={styles.imageBig} source={asset("react.png")} />
        </View>
      </View>
    )
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
  leftPane: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 400,
  },
  brandContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBig: {
    width: 280,
    height: 280,
  },
  oculus:{
    width: 200,
    height: 113,
    marginTop: 30,
  },
  facebook: {
    width: 150,
    height: 150,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default ReactVR;