<script>
	import Konva from 'konva';
	import { getContext, onDestroy, createEventDispatcher } from 'svelte';
	import { layerKey } from './context-keys';

	// export let x = undefined;
	// export let y = undefined;
	// export let width = undefined;
	// export let height = undefined;
	// export let fill = undefined;
	// export let stroke = undefined;
	// export let strokeWidth = undefined;

	const dispatch = createEventDispatcher();
	const layer = getContext(layerKey);
	export const rect = new Konva.Rect($$props);

	rect.on('click mousedown', (e) => {
		dispatch(e.type, e);
	});

	// when the value of props changes, the reactive statement $ will run
	// which runs the setAttrs function to update
	$: rect.setAttrs($$props);

	onDestroy(() => {
		rect.destroy();
	});

	layer.add(rect);
</script>
