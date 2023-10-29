// @ts-nocheck
import type {PageLoad} from './$types';

export const load = ({data}: Parameters<PageLoad>[0]) => {
    console.log("load function on the client");
    // console.log("data = ", data);
    return {
        products: data.products,
        title: 'Product List'
    };
}