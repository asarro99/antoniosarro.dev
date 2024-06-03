<script>
	import { Line, MoreButton, Title } from '$components/shared';
	import ProjectItem from './ProjectItem.svelte';
</script>

<div class="project">
	<Title title={'RECENT PROJECTS'} start={false} />
	<div class="items">
		<ProjectItem />
		<ProjectItem />
		<MoreButton title={'More Projects'} />
	</div>
	<Line />
</div>

<style lang="scss">
	.project {
		position: relative;
		margin-bottom: 16px;

		.items {
			@include flex;
			flex-direction: column;
			gap: 16px;
		}
	}
</style>
