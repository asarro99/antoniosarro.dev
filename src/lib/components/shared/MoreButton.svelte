<script lang="ts">
	import { RightTop } from '$components/assets/symbols';

	type Props = {
		title: string;
	};

	const { title }: Props = $props();
</script>

<div class="more">
	<span class="text">{title}</span>
	<span class="icon"> <RightTop /></span>
</div>

<style lang="scss">
	.more {
		@include flex;
		align-self: flex-end;
		background: var(--accent);
		color: var(--text);
		width: 5rem;
		height: 1.5rem;
		border-radius: 1rem;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
		z-index: 2;

		.text {
			text-transform: uppercase;
			font-size: 0.4rem;
			font-weight: bold;
		}

		.icon {
			width: 1rem;
			transform: scale(0.35);
		}
	}
</style>
