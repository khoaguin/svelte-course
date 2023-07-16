<script>
	export let src = undefined;

	let paused = true;
	let currentTime = 0;
	let volume = 0;
</script>

<video class:playing={!paused} {src} controls muted bind:paused bind:volume bind:currentTime />

<button
	on:click={() => {
		paused = !paused;
	}}>{paused ? 'Play' : 'Pause'}</button
>
<p>current time: {currentTime}</p>
<p>volume: {volume}</p>

<style>
	video.playing {
		outline: 4px solid red;
	}
</style>
