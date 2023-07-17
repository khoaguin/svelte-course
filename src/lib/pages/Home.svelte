<script>
	import VideoPlayer from '../VideoPlayer.svelte';
	import { pauseAllVideos, playAllVideos } from '../VideoPlayer.svelte';
	import Button from '../Button.svelte';
</script>

<Button on:click={playAllVideos} bgColor="green">Play all video</Button>
<Button on:click={pauseAllVideos}>Pause all video</Button>

<VideoPlayer src="mov_bbb.mp4" />
<VideoPlayer src="mov_bbb.mp4" />
<VideoPlayer src="mov_bbb.mp4" />
