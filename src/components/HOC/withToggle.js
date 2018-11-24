import React from 'react';

const WithToggle = (sidEffect) => (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isOn : true,
    }

    handleToggle = () => {
      sidEffect && sidEffect();
      this.setState({isOn : !this.state.isOn})
    }

    render = () => {
      return (
        <WrappedComponent {...this.props} isToggleOn={this.state.isOn} handleToggle={this.handleToggle} />
      )
    }
  }};

  export default WithToggle;
