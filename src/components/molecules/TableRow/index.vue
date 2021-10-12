<template>
	<tr role="row" class="row">
		<!-- FIXME: key -->
		<template v-if="isDataArray">
			<component
				:is="componentName"
				v-for="(item, index) in data"
				:key="index"
				:value="item"
				:col-index="index"
				>{{ item }}</component
			>
		</template>
		<template v-else>
			<component
				:is="componentName"
				v-for="(item, name, index) in data"
				:key="index"
				:value="item"
				:col-index="index"
				>{{ item }}</component
			>
		</template>
	</tr>
</template>

<script>
import TableData from '@/components/atoms/TableData';
import TableHeader from '@/components/atoms/TableHeader';

export default {
	name: 'TableRow',
	components: {
		TableData,
		TableHeader,
		// TableData: () => import('@/components/atoms/TableData'),
		// TableHeader: () => import('@/components/atoms/TableHeader'),
	},
	props: {
		data: {
			type: [Array, Object],
			default: () => [],
		},
		isHeader: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		componentName() {
			return this.isHeader ? 'TableHeader' : 'TableData';
		},
		isDataArray() {
			return Array.isArray(this.data);
		},
	},
};
</script>

<style lang="scss" scoped></style>
