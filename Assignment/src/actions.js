/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const LOAD_HollyWoodMovies = 'LOAD_PRODUCTS';
export const ADD_TO_SAVE = 'ADD_TO_SAVE';

export const addBook = products => ({ // add book

        type: ADD_TO_SAVE,
        products: {
            ...products,
            id: Number(new Date()),
        },
});

export function loadProduct(products) { // add book
    return {
        type: LOAD_PRODUCTS,
        products: {
            ...products,
        },
    };
}
export function load_h_Product(HollyWoodMovies) { // add book
    return {
        type: LOAD_HollyWoodMovies,
        HollyWoodMovies: {
            ...HollyWoodMovies,
        },
    };
}
