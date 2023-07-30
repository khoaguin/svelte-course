<script>
	import { page } from '$app/stores';
	import ProductHeader from './ProductHeader.svelte';

	$: console.log($page);
</script>

<h1>Product Page</h1>
<ProductHeader />

<p>Product ID: {$page.params.id}</p>

<a href="/product/123">Other product</a>
