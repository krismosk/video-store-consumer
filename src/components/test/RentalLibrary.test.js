import React from 'react';
import { render, cleanup } from '@testing-library/react';
import RentalLibrary from '../RentalLibrary';

const rentalLibrary = <RentalLibrary
  selectMovie = {() => { }}
/>;

describe("Rental Library", () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render ( rentalLibrary );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
})