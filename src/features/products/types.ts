export type Product = {
    id: number | string
    title: string
    price: number
    category: string
    description: string
    image: string
}

export type ProductsStateEnum = 'done' | 'loading' | 'failed'
export interface ProductsState {
    products: Product[]
    status: ProductsStateEnum
}