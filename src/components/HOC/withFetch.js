import React, {Component} from 'react';
import axios from 'axios';

const WithFetch = (fileKey, parseFunction) => (WrappedComponent) => {
  return class extends Component {
    state = {
      data: null
    }

    componentDidMount() {
      axios.get(`/api/filestore/${fileKey}`)
      .then(res => res.data)
      .then(fetchedData => {
        const data = fetchedData.split('\n');
        const parsedData = parseFunction ? parseFunction(data) : data;
        this.setState({data: parsedData})
      })
      .catch(err => {
        console.log("error", err)
      })
    };

    render = () => {
      return (
        <WrappedComponent {...this.props} data={this.state.data} />
      )
    }
  }};

  export default WithFetch;
