<script>
	import { MoreButton, Title } from '$components/shared';
	import ProjectItem from './ProjectItem.svelte';
</script>

<div class="project">
	<Title title={'RECENT BLOG POSTS'} start={false} />
	<div class="items">
		<ProjectItem />
		<ProjectItem />
		<MoreButton title={'More Projects'} />
	</div>
	<hr class="line" />
</div>

<style lang="scss">
	.project {
		position: relative;
		margin-bottom: 1rem;

		.items {
			@include flex;
			flex-direction: column;
			gap: 1rem;
		}
		.line {
			width: 100vw;
			position: absolute;
			left: -1.5rem;
			bottom: 1rem;
			border: none;
			border-top: 1px solid rgba($color: #ebedda, $alpha: 0.25);
		}
	}
</style>
