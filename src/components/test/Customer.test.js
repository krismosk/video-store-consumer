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

  test('It will render with the proper data for the customer', () => {
    const container = render ( customer);

    expect(container.getByText(/test customer/)).toBeDefined();
    expect(container.getByText(/test address/)).toBeDefined();
    expect(container.getByText(/test city/)).toBeDefined();
    expect(container.getByText(/test state/)).toBeDefined();
  });

  test( 'The findCustomer function is called when the select button is clicked on', () => {
    const findCustomer = jest.fn();
    const container = render( <Customer 
      key={ 1 }
      id={ 1337 }
      name={ 'test customer' }
      address={ 'test address' }
      city={ 'test city' }
      state={ 'test state' }
      postalCode={ 'test postalcode' }
      phone={ '1111111111' }
      findCustomer={ findCustomer }
    /> )
    const selectButton = container.getByText(/Select/);

    selectButton.click();

    expect(findCustomer).toHaveBeenCalled();
  });
})

