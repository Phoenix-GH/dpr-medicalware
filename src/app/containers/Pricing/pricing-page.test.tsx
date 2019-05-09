import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PricingPage from './';

const location = { object: jest.fn()};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PricingPage location={location} />, div);
});
