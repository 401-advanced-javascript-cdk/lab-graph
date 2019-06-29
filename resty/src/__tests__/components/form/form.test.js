import React from 'react';
import Form from '../../../components/form/form.js';

describe('<Form />', () => {
  it('contains a form element', () => {
    const form = shallow(<Form />);
    expect(form.find('form')).toBeTruthy();
  });
  it('has state with url, method, and jsonInput', () => {
    const form = shallow(<Form />);
    expect(form.state('url')).toBeDefined();
    expect(form.state('method')).toBeDefined();
    expect(form.state('jsonInput')).toBeDefined();
  });
});