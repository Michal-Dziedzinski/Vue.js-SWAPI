<template>
	<table class="table">
		<TableHead :data="headData"></TableHead>
		<TableBody :data="bodyData"></TableBody>
	</table>
</template>

<script>
import TableHead from '@/components/molecules/TableHead';
import TableBody from '@/components/molecules/TableBody';

export default {
	name: 'BaseTable',
	components: {
		TableHead,
		TableBody,
	},
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
	data() {
		return {
			headData: [],
			bodyData: [],
		};
	},
	watch: {
		data(val) {
			if (val.length) {
				this.getData();
			}
		},
	},
	methods: {
		getData() {
			const [firstEl] = this.data;

			this.headData = Object.keys(firstEl);
			this.bodyData = Object.values(this.data);
		},
	},
};
</script>

<style lang="scss" scoped>
.table {
	width: 100%;
	color: $primary;
	font-size: 1.8rem;
}
</style>
