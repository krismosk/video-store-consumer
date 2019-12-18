import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomerList from '../CustomerList';

const customerList = <CustomerList 
  selectCustomer = {() => { }}
/>;

describe("Customer List", () => {
  test('it can be rendered and matches the snapshot', () => {
    const { asFragment } = render ( customerList );

    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
})