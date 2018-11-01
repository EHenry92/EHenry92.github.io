import React from 'react';

const WithFetch = (fileLocation, parseFunction) => (WrappedComponent) => {
  return class extends React.Component {
    state = {
      data: null
    }

    componentDidMount() {
      jQuery.get(fileLocation, fetchedData => {
        const data = fetchedData.split('\n');
        const parsedData = parseFunction ? parseFunction(data) : data;
        this.setState({data: parsedData})
      })
    };

    render = () => {
      return (
        <WrappedComponent {...this.props} data={this.state.data} />
      )
    }
  }};

  export default WithFetch;
