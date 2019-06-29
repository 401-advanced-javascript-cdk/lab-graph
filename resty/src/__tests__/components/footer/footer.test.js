import React from 'react';
import Footer from '../../../components/footer/footer.js';

describe('<Footer />', () => {
  it('contains a footer element', () => {
    const footer = shallow(<Footer />);
    expect(footer.find('footer')).toBeTruthy();
  });
  it('contains a p element with the author\'s name', () => {
    const footer = shallow(<Footer />);
    expect(footer.find('p').text()).toBe('Author: Chris Kozlowski');
  });
});