<hr class="line" />

<style lang="scss">
	.line {
		width: 100vw;
		position: absolute;
		left: -24px;
		bottom: 16px;
		border: none;
		border-top: 1px solid rgba($color: #ebedda, $alpha: 0.25);

		@include media('xs') {
			left: -29px;
		}

		@include media('s') {
			left: -40px;
		}

		@include media('m') {
			left: -64px;
		}

		@include media('l') {
			left: -96px;
		}

		@include media('xl') {
			left: -115px;
		}

		@include media('xxl') {
			left: -131px;
		}
	}
</style>
