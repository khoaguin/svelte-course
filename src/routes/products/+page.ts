import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    console.log("Products Load Function");
    // import returns a promise, and then default returns another promise
    // hence we will need 2 awaits
    const products = await (await import('$lib/dummy-product.json')).default;
    console.log(products);
    return {
        products  // this will be available inside +page.svelte
    };
}