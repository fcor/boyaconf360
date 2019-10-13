import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  Environment,
  VrButton,
} from 'react-360';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }

    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleStart = this.handleStart.bind(this);

    Environment.setBackgroundImage(
      asset('space3.jpg'),
      {rotateTransform: [{rotateX: '180deg'}]},
    );
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

  handleStart(){
    console.log('Start!');
  }

  render() {
    const hover = this.state.hover;

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
              BoyaConf 360
            </Text>
            <Text style={[styles.tagClose, styles.text]}>
              {`>`}
            </Text>
          </View>
          <VrButton
              style={[styles.button, hover ? styles.buttonHover : null]}
              onEnter={this.handleEnter}
              onExit={this.handleExit}
              onClick={this.handleStart}
          >
            <Text style={styles.textDate}>
              Empecemos!
            </Text>
          </VrButton>
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
    width: 600,
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
    fontSize: 40,
    fontWeight: 'bold',
  },
  button: {
    width: 250,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb3b5a',
  },
  buttonHover: {
    transform: [
      {scale: [1.1, 1.1, 1.1]}
    ]
  }
});

export default Home;