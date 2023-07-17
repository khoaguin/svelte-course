<script context="module">
	let allVideos = new Set();

	export function pauseAllVideos() {
		allVideos.forEach((_video) => {
			_video.pause();
		});
	}

	export function playAllVideos() {
		allVideos.forEach((_video) => {
			_video.play();
		});
	}
</script>

<script>
	import { onDestroy, onMount } from 'svelte';

	export let src = undefined;

	let video;
	let paused = true;

	onMount(() => {
		allVideos.add(video);
	});
	onDestroy(() => {
		allVideos.delete(video);
	});
</script>

<video bind:this={video} class:playing={!paused} {src} controls muted bind:paused />

<style>
	video.playing {
		outline: 4px solid red;
	}
</style>
