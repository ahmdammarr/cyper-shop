import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import axios from 'axios'
import {ProductsState} from './types'


const initialState: ProductsState = {
  products: [],
  status: 'loading'
}

export const getProducts = createAsyncThunk(
  'product/getProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getProductsByCategory = createAsyncThunk(
  'product/getProducts',
  async (category:string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    [getProducts.pending.toString()]: state => {
      state.status = 'loading'
    },
    [getProducts.fulfilled.toString()]: (state, action) => {
      state.status = 'done'

      state.products = action.payload
    },
    [getProducts.rejected.toString()]: (state, action) => {
      state.status = 'failed'

      state.products = action.payload
    },
    [getProductsByCategory.pending.toString()]: state => {
      state.status = 'loading'
    },
    [getProductsByCategory.fulfilled.toString()]: (state, action) => {
      state.status = 'done'

      state.products = action.payload
    },
    [getProductsByCategory.rejected.toString()]: (state, action) => {
      state.status = 'failed'

      state.products = action.payload
    }
  }
})


export const selectProducts = (state: RootState) => state.products.products
export const selectStatus = (state: RootState) => state.products.status



export default productsSlice.reducer
