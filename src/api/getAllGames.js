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
		console.log('jojo men den körs');
		let response = await axios(config);
		console.log('OUTPUT ÄR: response från getallgames', response);
		return response.data;
	} catch (err) {
		console.error(err);
	}
	// axios(config)
	// 	.then(function(response) {
	// 		console.log(JSON.stringify(response.data));
	// 	})
	// 	.catch(function(error) {
	// 		console.log(error);
	// 	});
};
