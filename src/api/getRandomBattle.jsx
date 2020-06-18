import axios from 'axios';

let config = {
	method: 'get',
	url: '/api/hamsters/random',
	headers: {
		Authorization: 'abc123'
	}
};

const getContestant = async () => {
	try {
		let resp = await axios(config);

		let randomHamster = resp.data.randomHamster;
		return randomHamster;
	} catch (err) {
		console.error(err);
	}
};

const getRandomBattle = async contestants => {
	try {
		if (contestants && contestants.length === 2) {
			return contestants;
		} else {
			let contestant = await getContestant();
			if (!contestants) {
				contestants = [ ...contestant ];
			} else if (contestants[0].id !== contestant[0].id) {
				contestants = [ ...contestants, ...contestant ];
			}
			return getRandomBattle(contestants);
		}
	} catch (err) {
		console.error(err);
	}
};

export default getRandomBattle;
