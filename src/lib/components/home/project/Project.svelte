<script>
	import { Line, MoreButton, Title } from '$components/shared';
	import ProjectItem from './ProjectItem.svelte';
</script>

<div class="project">
	<Title title={'RECENT PROJECTS'} />
	<div class="items">
		<ProjectItem />
		<ProjectItem left={true} />
		<div class="more">
			<MoreButton title={'More Projects'} />
		</div>
	</div>
	<Line />
</div>

<style lang="scss">
	.project {
		position: relative;
		min-width: 100%;
		margin-bottom: 20px;

		.items {
			@include flex;
			flex-direction: column;
			gap: 16px;

			@include media('m') {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				gap: 13px;
				margin-bottom: 20px;
			}

			@include media('l') {
				grid-template-columns: repeat(15, 1fr);
				gap: 25px;
			}

			@include media('xl') {
				grid-template-columns: repeat(17, 1fr);
			}

			@include media('xxl') {
				grid-template-columns: repeat(19, 1fr);
			}

			.more {
				align-self: flex-end;
				z-index: 1;

				@include media('m') {
					grid-column: 10/12;
					grid-row: 3;
				}

				@include media('l') {
					grid-column: 12/14;
				}

				@include media('xl') {
					width: max-content;
					grid-column: 14/16;
				}

				@include media('xxl') {
					grid-column: 16/18;
				}
			}
		}
	}
</style>
