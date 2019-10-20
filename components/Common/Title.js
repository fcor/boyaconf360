import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-360';

class Title extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={[styles.tagOpen, styles.text]}>
          {`<`}
        </Text>
        <Text style={styles.text}>
          {this.props.children}
        </Text>
        <Text style={[styles.tagClose, styles.text]}>
          {`>`}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 100, 255, 0.4)',
  },
  tagOpen: {
    color: '#4dcc89',
  },
  tagClose: {
    color: '#eb3b5a',
  },
  text: {
    fontSize: 35,
    fontWeight: 'bold',
  },
});

export default Title;
