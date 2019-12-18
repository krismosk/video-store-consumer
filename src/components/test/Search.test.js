import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from '../Search';

const search = <Search />

describe("Search", () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render ( search );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
})