import React from 'react';
import { render, cleanup, getByText } from '@testing-library/react';
import Customer from '../Customer';

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

describe ('Customer', () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render( customer )

    expect(asFragment()).toMatchSnapshot();

    cleanup();
  });
})

