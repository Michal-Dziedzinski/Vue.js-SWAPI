export const getData = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (error) {
		return new Error(error);
	}
};
