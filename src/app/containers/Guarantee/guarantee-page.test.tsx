import * as React from 'react';
import * as ReactDOM from 'react-dom';
import GuaranteePage from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GuaranteePage />, div);
});
