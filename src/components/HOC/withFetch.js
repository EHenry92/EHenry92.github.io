import React, {Component} from 'react';
const AWS_ACCESS_KEY_ID =
  process.env.AWS_ACCESS_KEY_ID || require("../../../secrets.js").AWS_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY =
  process.env.SECRET_ACCESS_KEY || require("../../../secrets.js").AWS_SECRET_ACCESS_KEY;
const S3_BUCKET = process.env.S3_BUCKET || require("../../../secrets.js").S3_BUCKET;

const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: AWS_ACCESS_KEY_ID,
  secretAccessKey: SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

const WithFetch = (fileKey, parseFunction) => (WrappedComponent) => {
  return class extends Component {
    state = {
      data: null
    }

    componentDidMount() {
      const params = { Bucket: S3_BUCKET, Key: fileKey };
      s3.getObject(params, (err, info) => {
        if (err) {
          console.log(err, err.stack);
          this.setState({data: ''});
        }
        else {
          const data = info.Body.toString('utf8').split('\n');
          const parsedData = parseFunction ? parseFunction(data) : data;
          this.setState({data: parsedData});
        }
      });
    };

    render = () => {
      return (
        <WrappedComponent {...this.props} data={this.state.data} />
      )
    }
  }};

  export default WithFetch;

