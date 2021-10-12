const baseUrl = 'https://swapi.dev/api/';

const resources = {
	people: 'people',
	planets: 'planets',
};

export const peopleEndpoint = `${baseUrl}${resources.people}`;
export const planetsEndpoint = `${baseUrl}${resources.planets}`;
