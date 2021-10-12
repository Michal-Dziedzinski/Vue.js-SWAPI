<template>
	<div class="home">
		<BaseTable :data="people" />
	</div>
</template>

<script>
import { getData } from '@/services/api/http';
import { peopleEndpoint } from '@/services/api/endpoints';
import BaseTable from '@/components/organisms/BaseTable';

export default {
	name: 'Home',
	components: {
		BaseTable,
	},
	computed: {
		people() {
			return this.$store.getters.getMappedPeople;
		},
	},
	async mounted() {
		this.fetchPeople();
	},
	methods: {
		/* async */ fetchPeople() {
			// const { results } = /* await */ getData(peopleEndpoint);
			const siema = /* await */ getData(peopleEndpoint);

			console.log(siema);

			this.$store.dispatch('setPeople', siema.results);

			// TODO: error handling
		},
	},
};
</script>
