<script>
	import settings from '../stores/settings';
</script>

<h2>Settings</h2>

<!-- a button to update store's value -->
<button
	on:click={() => {
		// if the colorScheme is dark, set it to light, otherwise set it to dark
		$settings.colorScheme = $settings.colorScheme == 'dark' ? 'light' : 'dark';
	}}>Toggle Color Scheme</button
>

<!-- we can also bind inputs to store values -->
<label>
	<input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="dark" /> Dark
</label>
<label>
	<input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="light" /> Light
</label>
<div>
	{$settings.colorScheme}
</div>
