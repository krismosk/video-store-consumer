import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../Home';
import { render, cleanup } from '@testing-library/react';

describe("Home", () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render ( <Home /> );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Home />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})