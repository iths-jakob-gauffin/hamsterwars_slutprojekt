export const dummyAction = (val = 'tomt') => {
	return {
		type: 'DUMMY_ACTION',
		payload: val
	};
};
