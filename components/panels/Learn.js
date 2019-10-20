import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import Title from '../Common/Title';

class Learn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.panelContainer}>
        <Title>
          Aprende React 360
        </Title>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default Learn;