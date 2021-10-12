<template>
	<th
		class="cell"
		:aria-colindex="colIndex + 1"
		role="columnheader"
		scope="col"
		:tabindex="colIndex"
		aria-sort="none"
	>
		{{ value }}
		<div class="cell__buttons">
			<SortButton :sort-key="value" />
			<SortButton :sort-key="value" is-desc />
		</div>
	</th>
</template>

<script>
import SortButton from '@/components/atoms/SortButton';
export default {
	name: 'TableHeader',
	components: {
		SortButton,
	},
	props: {
		colIndex: {
			type: Number,
			required: true,
		},
		value: {
			type: [String, Number, Date],
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.cell {
	&__buttons {
		display: flex;
		flex-direction: column;
	}
}
</style>
