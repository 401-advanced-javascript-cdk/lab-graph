import React from 'react';

import ReactJson from 'react-json-view';

export default class Response extends React.Component {
  render() {
    return(
      <div className="response-area">
        <div>Response</div>
        <p>{this.props.responseData.toString()}</p>
        <ReactJson
        name="Headers"
        enableClipboard={false}
        collapsed={true}
        src={this.props.responseData.headers}
      />
      <ReactJson
        name="Response"
        enableClipboard={false}
        collapsed={false}
        src={this.props.responseData.body}
      />
      </div>
    );
  }
}