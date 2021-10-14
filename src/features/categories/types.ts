export type CategoriesStateEnum = 'done' | 'loading' | 'failed'
export type CategoriesState = {
    categories: string[]
    status: CategoriesStateEnum
}