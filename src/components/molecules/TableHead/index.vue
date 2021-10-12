<template>
	<thead role="rowgroup">
		<TableRow :data="data" is-header />
	</thead>
</template>

<script>
import TableRow from '@/components/molecules/TableRow';

export default {
	name: 'TableHead',
	components: {
		TableRow,
	},
	props: {
		data: {
			type: Array,
			default: () => [],
		},
	},
};
</script>

<style lang="scss" scoped></style>
