<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	console.log(data);
	$: products = data.products.products;
</script>

<h2>Products</h2>
{#if products && products.length > 0}
	<ul>
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt={product.title} />
			</li>
		{/each}
	</ul>
{/if}
