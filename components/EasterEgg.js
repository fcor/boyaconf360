import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

class EasterEgg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flow: 'EASTER_EGG',
    }

    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleEnter(){
    this.setState({
      hover: true,
    })
  }

  handleExit(){
    this.setState({
      hover: false,
    });
  }

  handleBack(){
    this.props.handleNext('MAIN');
  }

  render() {
    const hover = this.state.hover;

    return (
      <View style={styles.container}>
        <Image style={styles.image} 
              source={asset('boyaconf.png')} 
        />
        <VrButton style={styles.textContainer} onClick={this.handleBack}>
          <Text style={[styles.tagOpen, styles.text]}>
            {`<`}
          </Text>
          <Text style={styles.text}>
            Hagamos realidad la ciencia ficción!
          </Text>
          <Text style={[styles.tagClose, styles.text]}>
            {`>`}
          </Text>
        </VrButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  textContainer: {
    width: 850,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  tagOpen: {
    color: '#4dcc89',
  },
  tagClose: {
    color: '#eb3b5a',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  textDate: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default EasterEgg;