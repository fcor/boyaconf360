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
      <View style={styles.mainPanel}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainPanel: {
    width: 340,
    height: 340,
  },
});

export default Main;