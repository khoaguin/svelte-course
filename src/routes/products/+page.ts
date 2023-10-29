import type {PageLoad} from './$types';

export const load: PageLoad = ({data}) => {
    console.log("load function on the client");
    // console.log("data = ", data);
    return {
        products: data.products,
        title: 'Product List'
    };
}