<script>
	import { Stage, Layer, Rect } from '../konva';
	let showCanvas = true;
	let x = 20;

	let rect1, rect2;
</script>

<input type="checkbox" bind:checked={showCanvas} />
<input type="range" bind:value={x} min={0} max={300} />
<button
	on:click={() => {
		console.log('1st rect', rect1.rect.getAttrs());
		console.log('2nd rect', rect2.rect.getAttrs());
	}}>Get Rect Info</button
>

{#if showCanvas}
	<Stage width={300} height={400}>
		<Layer
			draggable
			on:dragmove={(e) => {
				console.log(e.detail);
			}}
			on:click={(e) => {
				console.log(e.detail);
			}}
		>
			<Rect bind:this={rect1} {x} y={20} fill="blue" width={100} height={100} />
			<Rect x={60} y={60} fill="red" width={100} height={100} />
		</Layer>
		<Layer {x}>
			<Rect
				bind:this={rect2}
				on:click={() => console.log('green clicked')}
				on:mousedown={() => console.log('green mousedown')}
				x={100}
				y={100}
				fill="green"
				width={100}
				height={100}
				stroke="white"
			/>
		</Layer>
	</Stage>
{/if}
