import React from 'react';

const WithToggle = (WrappedComponent) => {
  return class extends React.Component {
    state = {
      isOn : true,
    }

    handleToggle = () => {
      this.setState({isOn : !this.state.isOn})
    }

    render = () => {
      return (
        <WrappedComponent {...this.props} isToggleOn={this.state.isOn} handleToggle={this.handleToggle} />
      )
    }
  }};

  export default WithToggle;
