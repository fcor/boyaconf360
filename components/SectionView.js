import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  VrButton,
} from 'react-360';
import getSection from "./sections/utils";

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
    const content = getSection(this.props.section);
    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={[styles.tagOpen, styles.text]}>
            {`<`}
          </Text>
          <Text style={styles.text}>
            {this.props.section}
          </Text>
          <Text style={[styles.tagClose, styles.text]}>
            {`>`}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {content}
        </View>
        <VrButton
          style={[styles.button, hover ? styles.buttonHover : null]}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          onClick={this.handleClick}
          >
          <Text style={styles.buttonText}>
            Atrás
          </Text>
        </VrButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 60,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb3b5a',
  },
  buttonHover: {
    transform: [
      {scale: [1.02, 1.02, 1.02]}
    ]
  },
  textContainer: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  tagOpen: {
    color: '#4dcc89',
  },
  tagClose: {
    color: '#eb3b5a',
  },
  contentContainer:{
    width: '100%',
    height: 480,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});

export default SectionView;