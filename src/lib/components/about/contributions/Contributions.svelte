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
		margin-bottom: 16px;

		.canvas {
			position: relative;
			width: 100%;
			height: 150px;
			background: var(--bg);
			border-radius: 16px;
			border: 1.6px solid var(--accent);
			overflow: hidden;

			.stats {
				position: absolute;
				top: 0;
				right: 0;

				.yearly {
					@include flex(space-between, center);
					gap: 11px;
					border-left: 1.6px solid var(--accent);
					border-bottom: 1.6px solid var(--accent);
					border-bottom-left-radius: 8px;
					padding: 3px 8px;

					div {
						@include flex(center, flex-start);
						flex-direction: column;

						.total {
							font-size: 11px;
							font-weight: bold;
							color: var(--accent);
						}

						.label {
							font-size: 9.5px;
							font-weight: bold;
						}

						.date {
							font-size: 8px;
							color: var(--muted-text);
						}
					}
				}

				p {
					margin-right: 1.6px;
					margin-top: 3px;
					text-align: right;
					font-size: 9.5px;

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
