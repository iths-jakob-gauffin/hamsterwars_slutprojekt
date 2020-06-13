const initialState = [];

export const fetchHamstersReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_HAMSTERS':
			return action.payload;
		default:
			return state;
	}
};
