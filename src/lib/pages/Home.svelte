<script>
	import { spring } from 'svelte/motion';

	const boxProps = spring({ width: 100, height: 100 }, { stiffness: 0.1, damping: 0.3 });
</script>

<h2>Home</h2>

<button
	on:click={async () => {
		// wait for the random operation to be done before reaching console.log
		await boxProps.set(
			{
				width: Math.random() * 500,
				height: Math.random() * 500
			},
			{
				soft: 20
			}
		);
		console.log('done');
	}}>Make a random size & color button</button
>
<br /><br />

<div
	style="width: {$boxProps.width}px; 
		   height: {$boxProps.height}px; 
		   background-color: purple;"
/>
