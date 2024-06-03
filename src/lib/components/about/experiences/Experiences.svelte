<script lang="ts">
	import Item from './Item.svelte';
	import { Title } from '$components/shared';

	enum PositionEnum {
		FD = 'Fullstack Developer',
		BD = 'Backend Developer',
		BGD = 'Backend Game Developer'
	}

	type Experience = {
		position: PositionEnum;
		company: string;
		date: string;
	};

	const experiences: Experience[] = [
		{
			position: PositionEnum.FD,
			company: 'Freelancer',
			date: 'March 2023 - Present'
		},
		{
			position: PositionEnum.FD,
			company: 'ACCA Software',
			date: 'February 2022 - March 2023'
		},
		{
			position: PositionEnum.BD,
			company: 'University of Salerno',
			date: 'October 2020 - February 2021'
		},
		{
			position: PositionEnum.FD,
			company: 'Freelancer',
			date: 'January 2020 - June 2020'
		},
		{
			position: PositionEnum.BGD,
			company: 'Evolution Studio',
			date: 'May 2019 - November 2019'
		}
	];
</script>

<div class="experiences">
	<Title title={'EXPERIENCES'} start={false} />
	<ol class="list">
		{#each experiences as { position, company, date }}
			<Item {position} {company} {date} />
		{/each}
	</ol>
</div>

<style lang="scss">
	.experiences {
		margin-bottom: 16px;
		.list {
			@include flex(center, flex-start);
			flex-direction: column;
			gap: 32px;
			padding: 0;
			margin: 0;
			list-style-type: none;
		}
	}
</style>
