<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	// console.log(data);
	$: products = data.products.products;
</script>

Hi {data.user.name}, welcome to our store
<h2>Products</h2>
<h3>{data.title}</h3>
{#if products && products.length > 0}
	<ul>
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt={product.title} />
				<h3><a href="/product/{product.id}">{product.title}</a></h3>
				<p>{product.description}</p>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
	img {
		width: 50%;
	}
</style>
