import type { PageServerLoad } from "./$types";

/**
 * 
 * @param parent    The data returned from the parent route, e.g. ../+layout.server.ts
 * @returns 
 */
export const load: PageServerLoad = async ( { parent }) => {
    console.log("Products load function on the server");
    // import returns a promise, and then default returns
    // another promise hence we will need 2 awaits
    const parentData = await parent();
    console.log("parent data = ", parentData);  // parent data =  { user: { name: 'John', id: 1 } }
    const products = await (await import('$lib/dummy-product.json')).default;
    // console.log(products);
    return {
        products  // this will be available inside +page.svelte
    };
}