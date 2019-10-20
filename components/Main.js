import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import Panel from './Panel.js';
import GetStarted from './panels/GetStarted';
import HowItWorks from './panels/HowItWorks';
import Learn from './panels/Learn';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Panel>
          <GetStarted />
        </Panel>

        <Panel>
          <HowItWorks />
        </Panel>

        <Panel>
          <Learn />
        </Panel>
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
});

export default Main;