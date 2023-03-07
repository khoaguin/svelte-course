<script>
	let name = 'Svelte';
	let img_src = 'https://svelte.dev/svelte-logo.svg';
	let img_name = 'Svelte logo';
	let string = 'Some <strong>string</strong> with <em>HTML</em> tags';
</script>

<h1>Hello {name.toLowerCase()}!</h1>
<img src={img_src} alt={img_name} width="200" height="200" />
<p>{@html string}</p>

<style>
	h1 {
		color: yellowgreen;
	}
</style>
