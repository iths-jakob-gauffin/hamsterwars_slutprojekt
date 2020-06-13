import axios from 'axios';

let config = {
	method: 'get',
	url: '/api/hamsters',
	headers: {
		Authorization: 'abc123'
	}
};

export const fetchHamsters = () => async dispatch => {
	let response = await axios(config);
	console.log('OUTPUT ÄR: response', response);
	dispatch({
		type: 'FETCH_HAMSTERS',
		payload: response.data.hamsterObjects
	});
};
