import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import Movie from '../Movie';

const movie = <Movie 
  id={ 1337 }
  title={'test title'}
  image={'test image'}
  overview={'test overview'}
  releaseDate={'test date'}
  inventory={1}
  findMovie={() => { }}
/>;

describe('Movie', () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render( movie );
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
  test("it will render the proper data for the movie", () => {
    const container = render(movie)
    expect(container.getByText(/test title/)).toBeDefined();
    expect(container.getByText(/test overview/)).toBeDefined();
    expect(container.getByText(/test date/)).toBeDefined();
  });
  test('the findMovie function is called when the select button is clicked on', () => {
    const findMovie = jest.fn();
    const container = render(<Movie 
      id={ 1337 }
      title={'test title'}
      image={'test image'}
      overview={'test overview'}
      releaseDate={'test date'}
      inventory={1}
      findMovie={findMovie}
    />);

    const selectButton = container.getByText(/Select/);
    selectButton.click();
    expect(findMovie).toHaveBeenCalled();
  })
});