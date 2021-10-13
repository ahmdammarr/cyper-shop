import productsReducer,{getProducts} from '../productsSlice';
import {store} from 'app/store'

beforeAll(()=>jest.useFakeTimers('legacy'))

describe('products states', () => {
    it('should handle initial products state', () => {
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual({
            products: [],
            status: 'loading',
        });
    });
});
