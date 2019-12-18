import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import Rental from '../Rental';
import Movie from '../Movie'
import Customer from '../Customer'

const movie = <Movie 
  id={ 1337 }
  title={'test title'}
  image={'test image'}
  overview={'test overview'}
  releaseDate={'test date'}
  inventory={1}
  findMovie={() => { }}
/>;

const customer = <Customer 
  key={ 1 }
  id={ 1337 }
  name={ 'test customer' }
  address={ 'test address' }
  city={ 'test city' }
  state={ 'test state' }
  postalCode={ 'test postalcode' }
  phone={ '1111111111' }
  findCustomer={ () => { } }
/>;

const rental = <Rental
  movie={movie}
  customer={customer}
/>;

describe('Rental', () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render( rental );
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});