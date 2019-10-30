import React from 'react';
import {
  asset,
  Image,
  StyleSheet,
  Text,
  View,
  VrButton,
} from 'react-360';
import Title from '../Common/Title';
import PanelButton from '../Common/PanelButton';

class GetStarted extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.panelContainer}>
        <View style={styles.titleContainer}>
          <Title>
            Conoce React 360
          </Title>
        </View>
        <View style={styles.contentContainer}>
          <PanelButton
            text="React VR"
            height={145}
            imgUrl="history.png"
          />
          <PanelButton
            text="React 360"
            height={145}
            imgUrl="history.png"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
  },
  contentContainer: {
    width: '100%',
    height: 300,
    // padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default GetStarted;