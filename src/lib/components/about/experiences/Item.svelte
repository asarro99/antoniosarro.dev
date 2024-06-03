<script lang="ts">
	import { Calendar, Position, Work } from '$components/assets/symbols';

	type Props = {
		position: string;
		company: string;
		date: string;
	};

	const { position, company, date }: Props = $props();
</script>

<li class="position">
	<div class="wrapper">
		<div class="timestamp">
			<div class="icon">
				<Calendar />
			</div>
			{date}
		</div>
		<div class="company">
			<div class="icon">
				<Position />
			</div>
			{company}
		</div>
		<div class="name">
			<div class="icon">
				<Work />
			</div>
			{position}
		</div>
	</div>
</li>

<style lang="scss">
	.position {
		position: relative;
		padding-left: 64px;

		&::before {
			content: '';
			background-color: #293138;
			position: absolute;
			top: 50%;
			left: 16px;
			width: 25px;
			height: 25px;
			border-radius: 50%;
			transform: translateY(-50%);
			z-index: 1;
			transition: all 0.3s ease-in-out;
		}

		&::after {
			content: '';
			position: absolute;
			top: calc(50% + 21px);
			left: 29px;
			border-left: 2px dashed #293138;
			height: calc(100% + 48px - 41px);
			transform: translateX(-50%);
			z-index: 0;
		}

		&:last-child::after {
			display: none;
		}

		&:hover::before {
			background-color: var(--accent);
			transition: all 0.3s ease-in-out;
		}

		.wrapper {
			@include flex(center, flex-start);
			flex-direction: column;
			gap: 5px;
			border: 1.6px solid var(--accent);
			border-radius: 16px;
			padding: 8px;
			min-width: 192px;
			box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.5);
			transition: all 0.3s ease-in-out;

			.timestamp,
			.company,
			.name {
				@include flex;
				gap: 6.5px;
				font-weight: 600;
				font-size: 0.55em;
				text-transform: uppercase;
				color: var(--accent);
				transition: all 0.3s ease-in-out;

				.icon {
					width: 16px;
					height: 16px;
					transform: scale(0.8);
				}
			}
		}

		&:hover {
			.wrapper {
				background-color: var(--accent);

				.timestamp,
				.company,
				.name {
					color: var(--text);
				}
			}

			.name::before {
				content: '';
				position: absolute;
				border-left: 2px solid var(--accent);
				height: 80%;
				transform: translateY(-50%);
				top: 50%;
				left: 20%;
				color: var(--accent);
				animation: line 0.3s ease-in-out;
			}
		}
		@keyframes line {
			from {
				height: 0%;
			}
			to {
				height: 80%;
			}
		}
	}
</style>
