<script>
	import settings from './stores/settings';
</script>

<svelte:head>
	<!-- change fonts  -->
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>

	<!-- change background theme based on settings -->
	{#if $settings.colorScheme === 'dark'}
		<style>
			:root {
				--backgroundColor: black;
				--textColor: white;
			}
		</style>
	{:else}
		<style>
			:root {
				--backgroundColor: white;
				--textColor: black;
			}
		</style>
	{/if}
</svelte:head>
