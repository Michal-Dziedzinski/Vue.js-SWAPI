<template>
	<button
		class="button"
		:class="{ 'button--asc': !isDesc, 'button--desc': isDesc }"
		@click="sortValues"
	></button>
</template>

<script>
export default {
	name: 'SortButton',
	props: {
		isDesc: {
			type: Boolean,
			default: false,
		},
		sortKey: {
			type: String,
			default: '',
		},
	},
	methods: {
		sortValues() {
			this.$store.dispatch('sortPeople', {
				key: this.sortKey,
				isDesc: this.isDesc,
			});
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	--button-size: 1rem;
	width: 0;
	height: 0;
	background-color: transparent;
	border: none;
	border-left: var(--button-size) solid transparent;
	border-right: var(--button-size) solid transparent;
	margin-bottom: 0.4rem;

	&:hover {
		cursor: pointer;
	}

	&--asc {
		border-bottom: var(--button-size) solid rgba($primary, 0.4);

		&:hover {
			border-bottom-color: $primary;
		}
	}

	&--desc {
		border-top: var(--button-size) solid rgba($primary, 0.4);

		&:hover {
			border-top-color: $primary;
		}
	}
}
</style>
