import React from 'react';

const WithCarousel = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      currentDataIdx: 0,
      dataSrc: []
    }

    handleCarousel = () => {
      this.setState({isOn : !this.state.isOn})
    }

    render = () => {
      return (
        <WrappedComponent {...this.props}  imgToDisplay={this.state.dataSrc[this.state.currentDataIdx]}/>
      )
    }
  }};

  export default WithCarousel;
