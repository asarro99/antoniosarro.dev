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
		width: 80px;
		height: 24px;
		border-radius: 16px;
		box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
		z-index: 2;

		@include media('xs') {
			width: 88px;
			height: 24px;
		}

		@include media('s') {
			width: 96px;
			height: 29px;
		}

		@include media('m') {
			width: 136px;
			height: 27px;
		}

		@include media('xl') {
			width: 128px;
			height: 32px;
		}

		.text {
			text-transform: uppercase;
			font-size: 6.5px;
			font-weight: bold;

			@include media('xs') {
				font-size: 7px;
			}

			@include media('s') {
				font-size: 8px;
			}

			@include media('xl') {
				font-size: 11px;
			}
		}

		.icon {
			width: 16px;
			transform: scale(0.35);

			@include media('s') {
				transform: scale(0.4);
			}

			@include media('xl') {
				transform: scale(0.5);
			}
		}
	}
</style>
