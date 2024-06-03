<script>
	import { Title } from '$components/shared';
</script>

<div class="contributions">
	<Title title={'CONTRIBUTIONS'} />
	<div class="canvas">
		<div class="loading"></div>
	</div>
</div>

<style lang="scss">
	.contributions {
		margin-bottom: 16px;

		.canvas {
			@include flex;
			width: 100%;
			height: 150px;
			background: var(--bg);
			border: 1.6px solid var(--accent);
			border-radius: 16px;

			.loading {
				display: inline-block;
				width: 25px;
				height: 25px;
				border: 1px solid rgb(255 255 255 / 30%);
				border-radius: 50%;
				border-top: 2px solid var(--accent);
				animation: spin 1s ease-in-out infinite;

				@keyframes spin {
					to {
						transform: rotate(360deg);
					}
				}
			}
		}
	}
</style>
