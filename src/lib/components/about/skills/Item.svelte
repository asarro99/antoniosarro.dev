<script lang="ts">
	import { Triangle } from '$components/assets/symbols';

	type Props = {
		title: string;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		components: any;
	};

	const { title, components }: Props = $props();
</script>

<div class="group">
	<div class="title">
		<div class="icon">
			<Triangle />
		</div>
		<div class="text">
			<h2>{title}</h2>
		</div>
	</div>
	<div class="items">
		{#each components as component}
			<div class="item">
				<div class="icon">
					<svelte:component this={component} />
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.group {
		flex-direction: column;
		gap: 5px;
		margin-bottom: -8px;

		&:last-child {
			margin-bottom: 0;
		}

		&:nth-child(odd) {
			margin-left: 5px;
			@include flex(center, flex-start);
			align-self: flex-start;

			.title {
				margin-left: 8px;
				.icon {
					left: -8px;
				}
			}
		}

		&:nth-child(even) {
			@include flex(center, flex-end);
			align-self: flex-end;
			margin-right: 5px;

			.title {
				.text {
					margin-right: 8px;
				}
				.icon {
					right: 0;
					transform: rotate(80deg);
				}
			}
		}

		.title {
			position: relative;
			@include flex(flex-start, center);
			padding: 0;

			.text {
				font-weight: 700;
				font-size: 7px;
				z-index: 2;
			}

			.icon {
				position: absolute;
				z-index: 1;
				width: 21px;
				height: 21px;
				color: var(--accent);
			}
		}

		.items {
			@include flex(flex-start, center);
			gap: 5px;

			.item {
				border: 1.6px solid var(--accent);
				border-radius: 8px;
				width: 24px;
				height: 24px;
				box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
				@include flex;

				.icon {
					width: 16px;
					height: 16px;
					transform: scale(0.9);
					color: var(--accent);
				}
			}
		}
	}
</style>
