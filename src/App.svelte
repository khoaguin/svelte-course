<!-- JavaScript part -->
<script>
	import longpress from './lib/actions/longpress';

	let showButton = true;
	let duration = 1000;
</script>

<!-- HTML part -->

<label><input type="checkbox" bind:checked={showButton} />Toggle</label>

<label>
	<input type="range" bind:value={duration} max={4000} step={100} />{duration}ms
</label>

{#if showButton}
	<button use:longpress={{ duration }}>Hello</button>
{/if}

<!-- CSS part -->
<style>
</style>
