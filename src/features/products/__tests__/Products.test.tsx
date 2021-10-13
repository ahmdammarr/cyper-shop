import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import Products from '../Products';

import {getProducts} from '../productsSlice';


beforeAll(()=>jest.useFakeTimers('legacy'))


test('renders products', () => {
  const products = render(
    <Provider store={store}>
      <Products />
    </Provider>
  );

  expect(products).toBeDefined();

});
describe('products', () => {
    it('should handle products state', () => {
        store.dispatch(getProducts())
        const states = store.getState().products.status
       expect(states).toEqual('loading'||'failed'||'done')
    });
});