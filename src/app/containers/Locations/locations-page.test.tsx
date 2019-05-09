import * as React from 'react';
import * as ReactDOM from 'react-dom';
import LocationsPage from './';
const location = { object: jest.fn()};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocationsPage location={location} />, div);
});
