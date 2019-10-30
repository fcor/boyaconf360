import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  VrButton,
} from 'react-360';


class SectionView extends React.Component {
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
    this.props.goBack();
  }

  render() {
    const { hover } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {this.props.section}
        </Text>
        <VrButton
          style={[styles.button, hover ? styles.buttonHover : null]}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          onClick={this.handleClick}
          >
          <Text style={styles.text}>
            Go Back
          </Text>
        </VrButton>
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
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default SectionView;