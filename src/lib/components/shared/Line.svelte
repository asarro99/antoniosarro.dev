<hr class="line" />

<style lang="scss">
	.line {
		width: 100%;
		position: absolute;
		bottom: 15px;
		border: 0;
		height: 1px;
		background-image: linear-gradient(
			to right,
			rgba(0, 0, 0, 0),
			rgba($color: #ebedda, $alpha: 0.25),
			rgba(0, 0, 0, 0)
		);

		@include media('xs') {
			bottom: 17px;
		}

		@include media('m') {
			bottom: 36px;
		}

		@include media('l') {
			bottom: 40px;
		}
	}
</style>
