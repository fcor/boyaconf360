import React from 'react';
import {
  asset,
  View,
  Environment,
  StyleSheet,
} from 'react-360';
import Home from './Home';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flow: 'HOME',
    }

    Environment.setBackgroundImage(
      asset('space3.jpg'),
      {rotateTransform: [{rotateX: '180deg'}]},
    );

    this.handleNext = this.handleNext.bind(this);
  }

  handleNext(flow){
    this.setState({
      flow,
    });
  }

  render() {
    const flow = this.state.flow;

    let content;

    if (flow === 'HOME') {
      content = <Home handleNext={this.handleNext} />;
    } else if (flow === 'MAIN') {
      content = <Main />;
    }

    return(
      <View style={styles.panel}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    width: 1140,
    height: 620,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
})


export default App;
