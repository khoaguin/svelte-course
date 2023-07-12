<script>
	import { setContext, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	import formkey from './form-key';

	const dispatch = createEventDispatcher();
	export let initialValues = {};
	const form = writable({ values: initialValues, errors: {} });

	setContext(formkey, form);
</script>

<pre>
{JSON.stringify($form, null, 2)}
</pre>
<form
	on:submit|preventDefault={() => {
		dispatch('submit', $form.values);
	}}
>
	<slot />
</form>
