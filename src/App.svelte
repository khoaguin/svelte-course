<script>
	import Button from './lib/Button.svelte';
	import DiCodeigniter from 'svelte-icons/di/DiCodeigniter.svelte';
	import DiAtom from 'svelte-icons/di/DiAtom.svelte';
</script>

<Button
	on:click|once={() => alert('button clicked')}
	let:isLeftHovered
	size="large"
	shadow
	bgColor="#FF5E0E"
	textColor="white"
	disabled
>
	<div style:width="20px" slot="leftContent">
		{#if isLeftHovered}
			<DiCodeigniter />
		{:else}
			<DiAtom />
		{/if}
	</div>
	Button Text
</Button>

<style>
</style>
