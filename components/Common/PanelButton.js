import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';

class PanelButton extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hover: false,
    }
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
    this.handleClick = this.handleClick.bind(this)
  }

  handleEnter(){
    this.setState({
      hover: true
    })
  }

  handleExit(){
    this.setState({
      hover: false
    })
  }

  handleClick(){
    this.props.onClick(this.props.text);
  }

  render() {
    const { text, height, imgUrl } = this.props;
    const hover = this.state.hover;

    const heightStyle = {
      height,
    }
    return (
      <VrButton
        style={[styles.buttonContainer, heightStyle, hover ? styles.hover : null]}
        onEnter={this.handleEnter}
        onExit={this.handleExit}
        onClick={this.handleClick}
        >
        <Text style={styles.text}>
          {text}
        </Text>
        <Image style={styles.image} source={asset(imgUrl)} />
      </VrButton>
    )
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'rgba(0, 255, 0, 0.4)',
  },
  image: {
    width: 50,
    height: 50,
  },
  hover: {
    transform: [
      {scale: [1.02, 1.02, 1.02]}
    ]
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default PanelButton;