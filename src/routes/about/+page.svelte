<script lang="ts">
	import {
		Contributions,
		ContributionsSkeleton,
		Experiences,
		Hero,
		Map,
		Skills
	} from '$components/about';

	const { data } = $props();
</script>

<div class="about">
	<Hero />
	<Skills />
	<Experiences />
	{#await data.github}
		<ContributionsSkeleton />
	{:then github}
		<Contributions data={github} />
	{/await}
	<Map />
</div>

<style lang="scss">
	.about {
		margin-bottom: 16px;
	}
</style>
