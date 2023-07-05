<script>
	import settings from '../stores/settings';
	import direction from '../stores/direction';
</script>

<h2>Settings</h2>

<button
	on:click={() => {
		// if the colorScheme is dark, set it to light, otherwise set it to dark
		settings.toggleColorSetting();
	}}>Toggle Color Scheme</button
>

<button
	on:click={() => {
		settings.updateSetting('language', 'vi');
	}}
	>Update Language
</button>

<button
	on:click={() => {
		settings.reset();
	}}
	>Reset Settings
</button>

<br />
language: {$settings.language}
<br />
reading direction: {$direction}
<br />
theme: {$settings.colorScheme}
<br />

<!-- we can also bind inputs to store values -->
<label>
	<input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="dark" /> Dark
</label>
<label>
	<input type="radio" bind:group={$settings.colorScheme} name="colorScheme" value="light" /> Light
</label>

<select bind:value={$settings.language}>
	<option value="en">English</option>
	<option value="vi">Vietnamese</option>
</select>
