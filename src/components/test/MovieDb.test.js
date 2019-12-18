import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import MovieDB from '../MovieDb';

const movieDB = <MovieDB 
  id={ 1337 }
  title={'test title'}
  image={'test image'}
  overview={'test overview'}
  releaseDate={'test date'}
  externalId={1}
  addMovieCallback={() => { }}
/>;

describe('MovieDB', () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render( movieDB );
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
  test("it will render the proper data for the movie", () => {
    const container = render(movieDB)
    expect(container.getByText(/test title/)).toBeDefined();
    expect(container.getByText(/test overview/)).toBeDefined();
    expect(container.getByText(/test date/)).toBeDefined();
  });
  test('the findMovie function is called when the select button is clicked on', () => {
    const addMovieCallback = jest.fn();
    const container = render(<MovieDB 
      id={ 1337 }
      title={'test title'}
      image={'test image'}
      overview={'test overview'}
      releaseDate={'test date'}
      inventory={1}
      addMovieCallback={addMovieCallback}
    />);

    const selectButton = container.getByText(/Add to Rental Library/);
    selectButton.click();
    expect(addMovieCallback).toHaveBeenCalled();
  })
});