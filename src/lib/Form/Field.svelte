<script>
	import { v4 as uuid } from 'uuid';
	import { getContext } from 'svelte';
	import formkey from './form-key';

	export let name;
	export let type = 'text';
	export let label = undefined;
	export let validate = undefined;

	const formStore = getContext(formkey);

	const id = uuid();
</script>

<div class="field">
	{#if label}
		<label for={id}>{label}</label>
	{/if}
	<input
		{id}
		{name}
		{type}
		placeholder={label}
		value={$formStore.values[name] || ''}
		on:input={(e) => {
			$formStore.values[name] = e.currentTarget.value;
		}}
	/>
</div>

<style>
	div.field {
		margin-bottom: 10px;
	}
	label {
		display: block;
		font-size: 15px;
		margin-bottom: 5px;
	}
	input {
		height: 30px;
		width: 250px;
		max-width: 200px;
	}
</style>
