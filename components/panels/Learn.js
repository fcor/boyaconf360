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

class Learn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.panelContainer}>
        <View style={styles.titleContainer}>
          <Title>
          Aprende React 360
          </Title>
        </View>
        <View style={styles.contentContainer}>
          <PanelButton
            text="Surfaces"
            height={93.33}
            imgUrl="surface2.png"
            onClick={this.props.selectSection}
          />
          <PanelButton
            text="Locations"
            height={93.33}
            imgUrl="3d 2i.png"
            onClick={this.props.selectSection}
          />
          <PanelButton
            text="Components"
            height={93.33}
            imgUrl="blocki.png"
            onClick={this.props.selectSection}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  panelContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    height: 40,
  },
  contentContainer: {
    width: '100%',
    height: 300,
    marginTop: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});

export default Learn;