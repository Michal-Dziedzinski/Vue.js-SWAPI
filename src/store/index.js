import { createStore } from 'vuex';

const types = {
	SET_PEOPLE: 'SET_PEOPLE',
};

export default createStore({
	state: {
		people: [],
	},
	getters: {
		getMappedPeople(state) {
			return (
				state.people.length &&
				state.people.map(
					({ name, height, mass, created, edited, homeworld }) => ({
						name,
						height,
						mass,
						created: new Date(created),
						edited: new Date(edited),
						planet: homeworld,
					})
				)
			);
		},
	},
	mutations: {
		[types.SET_PEOPLE](state, peopleArr) {
			state.people = peopleArr;
		},
	},
	actions: {
		setPeople({ commit }, people) {
			commit(types.SET_PEOPLE, people);
		},
		sortPeople({ commit, state }, { key, isDesc }) {
			const sortedPeople =
				state.people.length &&
				state.people.sort((a, b) =>
					isDesc ? b[key] - a[key] : a[key] - b[key]
				);
			console.log(sortedPeople);
			commit(types.SET_PEOPLE, sortedPeople);
		},
	},
	modules: {},
});
