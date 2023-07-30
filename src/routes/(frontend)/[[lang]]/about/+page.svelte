<script>
	import { goto } from '$app/navigation';
	let name = 'Khoa';
	import { page } from '$app/stores';
</script>

<h1>About</h1>
<h2>Hi, my name is {name} and I am learning Svelte</h2>

{JSON.stringify($page.params)}

<button
	on:click={() => {
		goto('/');
	}}>Go to Home</button
>
