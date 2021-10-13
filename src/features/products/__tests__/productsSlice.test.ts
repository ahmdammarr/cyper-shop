import productsReducer from '../productsSlice';


describe('products reducer', () => {
    it('should handle products initial state', () => {
        expect(productsReducer(undefined, { type: 'unknown' })).toEqual({
            products: [],
            status: 'loading',
        });
    });

});
