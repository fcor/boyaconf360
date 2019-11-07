import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-360';
import Panel from './Common/Panel.js';
import GetStarted from './panels/GetStarted';
import HowItWorks from './panels/HowItWorks';
import Learn from './panels/Learn';

class PanelsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Panel>
          <GetStarted selectSection={this.props.selectSection} easterEgg={this.props.easterEgg} />
        </Panel>

        <Panel>
          <HowItWorks selectSection={this.props.selectSection} easterEgg={this.props.easterEgg} />
        </Panel>

        <Panel>
          <Learn selectSection={this.props.selectSection} easterEgg={this.props.easterEgg} />
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

export default PanelsView;