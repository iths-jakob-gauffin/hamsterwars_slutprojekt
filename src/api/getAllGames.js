import axios from 'axios';

export const getAllGames = async () => {
	let data = '';
	let config = {
		method: 'get',
		url: `/api/games`,
		headers: {
			Authorization: 'abc123'
		},
		data: data
	};

	try {
		let response = await axios(config);
		return response.data;
	} catch (err) {
		console.error(err);
	}
};
