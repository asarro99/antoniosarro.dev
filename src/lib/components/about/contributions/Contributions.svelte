<script lang="ts">
	import type { GithubStats } from '$types/github';
	import Scene from './Scene.svelte';
	import { Title } from '$components/shared';

	const { data }: { data: GithubStats } = $props();
</script>

<div class="contributions">
	<Title title={'CONTRIBUTIONS'} />
	<div class="canvas">
		<div class="stats">
			<div class="yearly">
				<div>
					<span class="total">{data.stats.totalContributions}</span>
					<span class="label">Total</span>
					<span class="date">Jan 1 -> Dec 31</span>
				</div>
				<div>
					<span class="total">{data.stats.bestDayTotalContribution}</span>
					<span class="label">Best day</span>
					<span class="date">{data.stats.bestDay}</span>
				</div>
			</div>
			<p>
				Average: <span class="success">{data.stats.averagePerDay}</span>
				<span class="muted">/ day</span>
			</p>
		</div>
		<Scene contributions={data.contributions} />
	</div>
</div>

<style lang="scss">
	.contributions {
		margin-bottom: 1rem;

		.canvas {
			position: relative;
			width: 100%;
			height: 150px;
			background: var(--bg);
			border-radius: 1rem;
			border: 0.1rem solid var(--accent);
			overflow: hidden;

			.stats {
				position: absolute;
				top: 0;
				right: 0;

				.yearly {
					@include flex(space-between, center);
					gap: 0.7rem;
					border-left: 0.1rem solid var(--accent);
					border-bottom: 0.1rem solid var(--accent);
					border-bottom-left-radius: 0.5rem;
					padding: 0.2rem 0.5rem;

					div {
						@include flex(center, flex-start);
						flex-direction: column;

						.total {
							font-size: 0.7rem;
							font-weight: bold;
							color: var(--accent);
						}

						.label {
							font-size: 0.6rem;
							font-weight: bold;
						}

						.date {
							font-size: 0.5rem;
							color: var(--muted-text);
						}
					}
				}

				p {
					margin-right: 0.1rem;
					margin-top: 0.2rem;
					text-align: right;
					font-size: 0.6rem;

					.success {
						color: var(--accent);
					}

					.muted {
						color: var(--muted-text);
					}
				}
			}
		}
	}
</style>
