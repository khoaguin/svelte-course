<script>
	export let size = 'large';
	export let shadow = false;
	export let bgColor = 'black';
	export let textColor = 'white';
	let isLeftHovered;
</script>

<button
	on:click
	style:background-color={bgColor}
	style:color={textColor}
	class:size-lg={size == 'large'}
	class:size-sm={size == 'small'}
	class:has-left={$$slots.leftContent}
	class:shadow
	{...$$restProps}
>
	{#if $$slots.leftContent}
		<div
			class="left-content"
			on:mouseenter={() => (isLeftHovered = true)}
			on:mouseleave={() => (isLeftHovered = false)}
		>
			<slot name="leftContent" />
		</div>
	{/if}
	<slot {isLeftHovered}>Fallback</slot>
</button>

<style lang="scss">
	button {
		display: flex;
		align-items: center;
		background-color: var(--buttonBgColor);
		border: none;
		color: var(--buttonTextColor);
		cursor: pointer;
		font-weight: bold;
		padding: 15px 20px;
		border-radius: 5px;
		cursor: pointer;
		.left-content {
			margin-right: 10px;
		}
		&:disabled {
			opacity: 0.6;
			cursor: not-allowed;
		}
		&:hover {
			background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0 0);
		}
		&:active {
			background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0 0);
		}
		&.size-sm {
			padding: 15px 20px;
		}
		&.size-lg {
			padding: 20px 25px;
			font-size: 20px;
		}
		&.shadow {
			box-shadow: 10px 10px 10px rgba(252, 147, 147, 0.3);
		}
	}
</style>
