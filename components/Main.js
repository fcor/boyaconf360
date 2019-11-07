import React from 'react';
import PanelsView from "./PanelsView";
import SectionView from "./SectionView";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: null,
    };
    this.handleSelectSection = this.handleSelectSection.bind(this);
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleSelectSection(section) {
    this.setState({
      section,
    });
  }

  handleGoBack(){
    this.setState({
      section: null,
    });
  }

  render() {
    const { section } = this.state;

    if (!section) {
      return (
        <PanelsView selectSection={this.handleSelectSection} easterEgg={this.props.handleNext} />
      );
    }

    return <SectionView section={section} goBack={this.handleGoBack} />
  };
};


export default Main;