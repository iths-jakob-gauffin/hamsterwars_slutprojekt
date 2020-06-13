import axios from 'axios';

// axios(config)
// 	.then(function(response) {
// 		console.log(JSON.stringify(response.data));
// 	})
// 	.catch(function(error) {
// 		console.log(error);
// 	});

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
		console.log('OUTPUT ÄR: contestants 1', contestants);

		if (contestants && contestants.length === 2) {
			return contestants;
		} else {
			let contestant = await getContestant();
			console.log('OUTPUT ÄR: contestant 2', contestant);
			if (!contestants) {
				contestants = [ ...contestant ];
				console.log('OUTPUT ÄR: contestants 3', contestants);
				// return getRandomBattle(contestants);
			} else if (contestants[0].id !== contestant[0].id) {
				contestants = [ ...contestants, ...contestant ];
				// return getRandomBattle(contestants);
			}
			return getRandomBattle(contestants);
		}
	} catch (err) {
		console.error(err);
	}
};
// const getRandomBattle = async contestants => {
// 	try {
// 		console.log('OUTPUT ÄR: contestants 1', contestants);
// 		if (contestants.length === 2) {
// 			return contestants;
// 		}
// 		let contestant = await getContestant();
// 		console.log('OUTPUT ÄR: contestant 2', contestant);
// 		if (!contestants) {
// 			contestants = [ ...contestants, contestant ];
// 			console.log('OUTPUT ÄR: contestants 3', contestants);
// 			getRandomBattle(contestants);
// 		} else if (
// 			contestants &&
// 			!contestants[0].id.includes(contestant.id)
// 		) {
// 			contestants = [ ...contestants, contestant ];
// 		}
// 		getRandomBattle(contestants);
// 	} catch (err) {
// 		console.error(err);
// 	}
// };

export default getRandomBattle;
