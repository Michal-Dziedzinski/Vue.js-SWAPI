<template>
	<tbody>
		<TableRow v-for="(row, index) in data" :key="index" :data="row" />
	</tbody>
</template>

<script>
import TableRow from '@/components/molecules/TableRow';

export default {
	name: 'TableBody',
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
