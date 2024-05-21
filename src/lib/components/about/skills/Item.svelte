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
		gap: 0.3rem;
		margin-bottom: -0.5rem;

		&:last-child {
			margin-bottom: 0;
		}

		&:nth-child(odd) {
			margin-left: 0.3rem;
			@include flex(center, flex-start);
			align-self: flex-start;

			.title {
				margin-left: 0.5rem;
				.icon {
					left: -0.5rem;
				}
			}
		}

		&:nth-child(even) {
			@include flex(center, flex-end);
			align-self: flex-end;
			margin-right: 0.3rem;

			.title {
				.text {
					margin-right: 0.5rem;
				}
				.icon {
					right: 0rem;
					transform: rotate(80deg);
				}
			}
		}

		.title {
			position: relative;
			@include flex(flex-start, center);
			padding: 0;

			.text {
				color: var(--text);
				font-weight: 700;
				font-size: 0.45rem;
				z-index: 2;
			}

			.icon {
				position: absolute;
				z-index: 1;
				width: 1.3rem;
				height: 1.3rem;
				color: var(--accent);
			}
		}

		.items {
			@include flex(flex-start, center);
			gap: 0.3rem;

			.item {
				border: 0.1rem solid var(--accent);
				border-radius: 0.5rem;
				width: 1.5rem;
				height: 1.5rem;
				box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.2);
				@include flex;

				.icon {
					width: 1rem;
					height: 1rem;
					transform: scale(0.9);
					color: var(--accent);
				}
			}
		}
	}
</style>
