import axios from 'axios';
export const getTopOrBottom = async resource => {
	let config = {
		method: 'get',
		url: `/api/charts/${resource}`,
		headers: {
			Authorization: 'abc123'
		}
	};

	try {
		let response = await axios(config);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
