import React from 'react';

import Response from './components/response/response.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import superagent from 'superagent';

import './app.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.response = '';
  }

  submitForm = (inputs) => {
    console.log({jsonInput: inputs.jsonInput});
    if(inputs.method === 'get') {
      inputs.jsonInput = "{}";
    }
    superagent(inputs.method, inputs.url)
      .send(JSON.parse(inputs.jsonInput))
      .then(response => {
        console.log(response);
        this.setState({response});
      });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form submitForm={this.submitForm} />
        <Response responseData={this.state.response} />
        <Footer />
      </React.Fragment>
    );
  }
}
