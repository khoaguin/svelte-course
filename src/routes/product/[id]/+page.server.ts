import type { PageServerLoad } from './$types'
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({params}) => {
    console.log("getting product with id =", params.id);
    const products = await (await import('$lib/dummy-product.json')).default;
    const product = products.products.find(p => p.id == +params.id);  // +'1' = int(1)
    
    if (!product) {
        throw error(404, "product can't be found!");
        // throw redirect(301, '/products');
    }

    return {
        product
    }
}