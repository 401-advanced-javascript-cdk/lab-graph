import React from 'react';

import App from '../app.js';

describe('<App />', () => {
  it('renders a Footer component', () => {
    const app = shallow(<App />);
    expect(app.find('Footer')).toBeTruthy();
  });
  it('renders a Header component', () => {
    const app = shallow(<App />);
    expect(app.find('Header')).toBeTruthy();
  });
  it('renders a Form component', () => {
    const app = shallow(<App />);
    expect(app.find('Form')).toBeTruthy();
  });
  it('renders a Response component', () => {
    const app = shallow(<App />);
    expect(app.find('Response')).toBeTruthy();
  });
  it('has state for a response', () => {
    const app = shallow(<App />);
    expect(app.state('response')).toBeDefined();
  });
});
