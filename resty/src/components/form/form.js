import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: '',
      jsonInput: '',
    }
  }

  submitForm = event => {
    event.preventDefault();
    this.props.submitForm(this.state);
  }

  handleFormInput = event => {
    const inputName = event.target.name;
    const input = event.target.value;
    this.setState({ [inputName]: input });
  }

  render() {
    return(
      <form
        className = "resty-form"
        onSubmit = {this.submitForm}
      >
        <input 
          type = "text"
          name = "url"
          onChange = {this.handleFormInput}
          placeholder = "URL"
        />
        <ul>
          <li>
            <label>
              <input
                type = "radio"
                name = "method"
                value = "get"
                onChange = {this.handleFormInput}
              />
              GET
            </label>
          </li>
          <li>
            <label>
              <input
                type = "radio"
                name = "method"
                value = "post"
                onChange = {this.handleFormInput}
              />
              POST
            </label>
          </li>
          <li>
            <label>
              <input
                type = "radio"
                name = "method"
                value = "put"
                onChange = {this.handleFormInput}
              />
              PUT
            </label>
          </li>
          <li>
            <label>
              <input
                type = "radio"
                name = "method"
                value = "patch"
                onChange = {this.handleFormInput}
              />
              PATCH
            </label>
          </li>
          <li>
            <label>
              <input
                type = "radio"
                name = "method"
                value = "delete"
                onChange = {this.handleFormInput}
              />
              DELETE
            </label>
          </li>
        </ul>
        <textarea
          name = "jsonInput"
          onChange = {this.handleFormInput}
          placeholder = "JSON body" 
        />
        <button type="submit">Send</button>
      </form>
    );
  }
}